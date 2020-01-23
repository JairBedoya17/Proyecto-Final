// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Assets
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {

    return (
      <div className="container">
        <div className="row1">
        <div className="proyecto">
        <p>Redes Sociales  </p>
      </div>  
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                    <SocialIcon url="https://github.com/https-github-com-Jaky-Maiky/Proyecto-Final"/>
              </li>
              <div className="proyecto">
              <p>Proyecto Graficas y animaciones 6to PUCESE</p>
              <p>Integrantes</p>
              <p>Jair Bedoya, Aaron Jaramillo, Jhonny Guevara y Kristy Mina</p>
              <p><Link to="/" class="btn btn-primary">Principal</Link></p>
              </div>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;