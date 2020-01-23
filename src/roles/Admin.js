import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import '../roles/VistaRoles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
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

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
           
      <div class="container">
        <div class="panel panel-default">
        <div class="Menulist">
            <h3 class="listm">
              Graficacion y Animacion<br></br>
              Menu<br></br>
            </h3>
            {/*<h4><Link to="/alumno" class="btn btn-alumno"> Alumno </Link></h4>        
            <h4><Link to="/Docente" class="btn btn-Docente"> Docente </Link></h4>
            <h4><Link to="/Admin" class="btn btn-Administrador"> Administrador </Link></h4>*/}
          </div>


          <div class="panel-heading">
            <h3 class="panel-title">
              Vista General 
            </h3>
          </div>
          <div class="panel-body">
            <h4 class="panel-Salir"><Link to="/" class="btn btn-primary">Salir</Link></h4>
            <h4><Link to="/create" class="btn btn-primary">Add Board</Link></h4>
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
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.horai}</td>
                    <td>{board.horaf}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div class="mod-lab">
              click en el nombre del laboratorio para modificar
          </div>

        </div>
      </div>
    );
  }
}

export default App;
