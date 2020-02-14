import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, notification, DatePicker } from "antd";
import { getAccessTokenApi } from "../../../../api/auth";
import { addSalaApi, updateSalaApi } from "../../../../api/sala";
import moment from "moment";

import "./AddEditSalaForm.scss";

export default function AddEditSalaForm(props) {
  const { setIsVisibleModal, setReloadSalas, sala } = props;
  const [salaData, setSalaData] = useState({});

  useEffect(() => {
    sala ? setSalaData(sala) : setSalaData({});
  }, [sala]);

  const addSala = e => {
    e.preventDefault();

    if (!salaData.idSala) {
      notification["error"]({
        message: "El id de la reservación es obligatorio"
      });
    } else {
      const accessToken = getAccessTokenApi();

      addSalaApi(accessToken, salaData)
        .then(response => {
          const typeNotification =
            response.code === 200 ? "success" : "warning";
          notification[typeNotification]({
            message: response.message
          });
          setIsVisibleModal(false);
          setReloadSalas(true);
          setSalaData({});
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor, intentelo más tarde."
          });
        });
    }
  };

  const updateSala = e => {
    e.preventDefault();

    const accessToken = getAccessTokenApi();

    updateSalaApi(accessToken, sala._id, salaData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadSalas(true);
        setSalaData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor, intentelo más tarde."
        });
      });
  };

  return (
    <div className="add-edit-sala-form">
      <AddEditForm
        sala={sala}
        addSala={addSala}
        updateSala={updateSala}
        salaData={salaData}
        setSalaData={setSalaData}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { sala, addSala, updateSala, salaData, setSalaData } = props;

  return (
    <Form className="form-add-edit" onSubmit={sala ? updateSala : addSala}>
      <Form.Item>
        <Input
          prefix={<Icon type="key" />}
          placeholder="ID del reservación"
          value={salaData.idSala}
          onChange={e => setSalaData({ ...salaData, idSala: e.target.value })}
          disabled={sala ? true : false}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="link" />}
          placeholder="Nombre de la sala"
          value={salaData.nlab}
          onChange={e => setSalaData({ ...salaData, nlab: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="gift" />}
          placeholder="Nombre de la materia"
          value={salaData.materia}
          onChange={e => setSalaData({ ...salaData, materia: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <DatePicker
          prefix={<Icon type="dollar" />}
          style={{ width: "100%" }}
          format="DD/MM/YYYY HH:mm:ss"
          placeholder="Fecha de inicio"
          value={salaData.hinicio && moment(salaData.hinicio)}
          onChange={(e, value) =>
            setSalaData({
              ...salaData,
              hinicio: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <DatePicker
          prefix={<Icon type="dollar" />}
          style={{ width: "100%" }}
          format="DD/MM/YYYY HH:mm:ss"
          placeholder="Fecha de terminación"
          value={salaData.hfinal && moment(salaData.hfinal)}
          onChange={(e, value) =>
            setSalaData({
              ...salaData,
              hfinal: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="dollar" />}
          placeholder="Nombre del docente"
          value={salaData.nomprofe}
          onChange={e => setSalaData({ ...salaData, nomprofe: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          {sala ? "Actualizar reservación" : "Crear reservación"}
        </Button>
      </Form.Item>
    </Form>
  );
}
