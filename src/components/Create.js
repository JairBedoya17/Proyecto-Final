import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      horai: '',
      horaf: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description,horai,horaf, author } = this.state;

    this.ref.add({
      title,
      description,
      horai,
      horaf,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        horai: '',
        horaf: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description,horai,horaf, author } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Reservar laboratorio
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">N° LAB:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="N° LAB" />
              </div>
              <div class="form-group">
                <label for="description">Materia:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Nombre Matereria" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="horai">Hora Inicio:</label>
                 <input type="time" name="horai" onChange={this.onChange} placeholder="Hora Inicio"/>
              </div>
              <div class="form-group">
                <label for="horaf">Hora Fin:</label>
                 <input type="time" name="horaf" onChange={this.onChange} placeholder="Hora Fin"/>
              </div>
              <div class="form-group">
                <label for="author">Nombre Profesor:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Nombre Profesor" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
