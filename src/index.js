import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Alumno from './roles/Alumno';
import Docente from './roles/Docente';
import Admin from './roles/Admin';
import Login from './components/Login/Login';
//import  Ar from './components/Ar';
//import ReactArApp from './components/ReactArApp';
import webcant from './components/webcant';
import Footer from '../src/Global/Footer/Footer';
ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path='/alumno' component={Alumno} />
        <Route path='/docente' component={Docente} />
        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login}/>
        < Route path='/cam' component= {webcant}/>


        {/*<Route path='/arjs' component={ReactArApp}/>*/} 
        {/*<Route path='/arjs' component={Ar}/>*/}
        
      </div>
      <div className="App-footer">
        <Footer/>
        </div>
  </Router>,
  document.getElementById('root')
);

// Si desea que su aplicación funcione sin conexión y se cargue más rápido, puede cambiar
// anular el registro () para registrar () a continuación. Tenga en cuenta que esto viene con algunas trampas.
// Obtenga más información sobre los trabajadores de servicios: http://bit.ly/CRA-PWA
serviceWorker.unregister();
