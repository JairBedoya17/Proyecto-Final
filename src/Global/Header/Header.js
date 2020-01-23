// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import './Header.css';

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;

    return (
      <div className="Header">
        <div className="icono">
          <h2>Graficacion y Animacion</h2>
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;