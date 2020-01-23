'use strict';
import lab1 from './marcadores/Lab1/lab1';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
const e = React.createElement;
// ejemplo de realidad aumentada

class AF extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards'); // llamada de los datos que se van a visualizar
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  
  onCollectionUpdate = (querySnapshot) => {  //datos de qeu se van a validar en la base de datos
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description,horai,horaf, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        horai,
        horaf,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  render() {

    return (
      <div>
        
        <a-scene embedded arjs='sourceType: webcam;'>
       		<a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
       		<a-marker-camera preset='hiro'></a-marker-camera>
     	  </a-scene>
         <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-Alumno">
              Vista Alumno
            </h3>
          </div>
          <div class="panel-body">
          <h4 class="panel-Salir"><Link to="/" class="btn btn-primary">Salir</Link></h4>
          <h4><Link to="/cam" class="btn btn-primary"> Camara </Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>N° Lab </th>
                  <th>Materia</th>
                  <th>Hora inicio</th>
                  <th>Hora Fin</th>
                  <th>Nombre Profesor</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td>{board.title}</td>
                    <td>{board.description}</td>
                    <td>{board.horai}</td>
                    <td>{board.horaf}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

         
      </div>
      
    );
  }
}

const domContainer = document.querySelector('#marker');
ReactDOM.render(e(AF), domContainer);