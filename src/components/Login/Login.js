import React, {Component} from "react";
import {  Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
//import fire from '../../config/fire';
import fire from '../../Firebase';
import './Login.css';
//import Footer from '../../Global/Footer/Footer';
	class Login extends Component{
		constructor(props){
			super(props);  
			this.login=this.login.bind(this); // coneccion a la base de datos 
			this.handleChange = this.handleChange.bind(this);    
			this.state ={
				email:'', password:'' // validacion del usuario y contraseña para la coneccion de la base de datos
			}
		}
		login(e){
			e.preventDefault();
			fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
			}).catch((error)=>{  //  control de errores de la coneccion de la base de datos
				console.log(error);
			});
		}
		handleChange(e){
			this.setState({ [e.target.name]: e.target.value});
		}
		render(){
			return(   // vista del login 
		<div className='Login'>
		<Container className="App">
        <h2>Iniciar</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="email@email.com" // vista del ejemplo a ingresar en el login
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="********" // vista del tipo de dato en el login
              />
            </FormGroup>
          </Col>
          <Button onClick={this.login}>Iniciar</Button><br/><br/>
         
        </Form>
      </Container>
      </div>
      
				);
	}
}

export default Login;