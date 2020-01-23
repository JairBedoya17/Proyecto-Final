import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      horai:'',
      horaf:'',
      author: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          horai: board.horai,
          horaf: board.horaf,
          author: board.author
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description,horai,horaf, author } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      title,
      description,
      horai,
      horaf,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        horai:'',
        horaf:'',
        author: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)  // envia a la pagina principal para visualizar datos
    })                                                //en la cual es el rol del administrador
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT BOARD
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">N° LAB:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Materia:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="horai">Hora inicio:</label>
                <input type="time" name="horai"  value={this.state.horai} onChange={this.onChange} placeholder="Hora Inicio" />
              </div>
              <div class="form-group">
                <label for="horaf">Hora fin:</label>
                <input type="time" name="horaf"  value={this.state.horaf} onChange={this.onChange} placeholder="Hora Fin" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
