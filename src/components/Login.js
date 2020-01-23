import React, {Component} from "react";
import {  Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from '../Firebase';
	class Login extends Component{
		constructor(props){
			super(props);
			this.login=this.login.bind(this);
			this.handleChange = this.handleChange.bind(this);
			this.state ={
				email:'', password:''
			}
		}
		login(e){
			e.preventDefault();
			firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
			}).catch((error)=>{
				console.log(error);
			});
		}
		handleChange(e){
			this.setState({ [e.target.name]: e.target.value});
		}
		render(){
			return(
        
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
                placeholder="email@email.com"
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
                placeholder="********"
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