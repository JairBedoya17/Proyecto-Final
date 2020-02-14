import React, { useState, useEffect } from "react";
import { List, Button, Icon, Modal as ModalAntd, notification } from "antd";
import DragSortableList from "react-drag-sortable";
import Modal from "../../../Modal";
import AddEditSalaForm from "../AddEditSalaForm";
import { getAccessTokenApi } from "../../../../api/auth";
import {
  getSalasApi,
  deleteSalaApi,
  updateSalaApi
} from "../../../../api/sala";

import "./SalasList.scss";

const { confirm } = ModalAntd;

export default function SalasList(props) {
  const { salas, setReloadSalas } = props;
  const [listSalas, setListSalas] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listSalaArray = [];
    salas.forEach(sala => {
      listSalaArray.push({
        content: (
          <Sala
            sala={sala}
            deleteSala={deleteSala}
            editSalaModal={editSalaModal}
          />
        )
      });
    });
    setListSalas(listSalaArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salas]);

  const onSort = (sortedList, dropEvent) => {
    const accessToken = getAccessTokenApi();

    sortedList.forEach(item => {
      const { _id } = item.content.props.sala;
      const order = item.rank;
      updateSalaApi(accessToken, _id, { order });
    });
  };

  const addSalaModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo reservación");
    setModalContent(
      <AddEditSalaForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadSalas={setReloadSalas}
      />
    );
  };

  const editSalaModal = sala => {
    setIsVisibleModal(true);
    setModalTitle("Actualizando reservación");
    setModalContent(
      <AddEditSalaForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadSalas={setReloadSalas}
        sala={sala}
      />
    );
  };

  const deleteSala = sala => {
    const accesToken = getAccessTokenApi();

    confirm({
      title: "Eliminando reservación",
      content: `¿Estas seguro de que quieres eliminar la reservación ${sala.idSala}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteSalaApi(accesToken, sala._id)
          .then(response => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message
            });
            setReloadSalas(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor, intentelo más tarde."
            });
          });
      }
    });
  };

  return (
    <div className="salas-list">
      <div className="salas-list__header">
        <Button type="primary" onClick={addSalaModal}>
          Nueva reservación
        </Button>
      </div>

      <div className="salas-list__items">
        {listSalas.length === 0 && (
          <h2 style={{ textAlign: "center", margin: 0 }}>
            No tienes reservaciónes creadas
          </h2>
        )}
        <DragSortableList items={listSalas} onSort={onSort} type="vertical" />
      </div>

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function Sala(props) {
  const { sala, deleteSala, editSalaModal } = props;
  const [salaData, setSalaData] = useState(null);

  useEffect(() => {
    getSalasApi(sala.idSala).then(response => {
      if (response.code !== 200) {
        notification["warning"]({
          message: `El reservación con el id ${sala.idSala} no se ha encontrado.`
        });
      }
      setSalaData(response.data);
    });
  }, [sala]);

  if (!salaData) {
    return null;
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editSalaModal(sala)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={() => deleteSala(sala)}>
          <Icon type="delete" />
        </Button>
      ]}
    >
      <img
        src={salaData.image_480x270}
        alt={salaData.title}
        style={{ width: "100px", marginRight: "20px" }}
      />
      <List.Item.Meta
        title={`${salaData.title} | ID: ${sala.idSala}`}
        description={salaData.headline}
      />
    </List.Item>
  );
}
