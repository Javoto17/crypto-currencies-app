import React, { Component } from 'react';
import './Home.scss';

import Nav from '../../components/Nav/Nav';
import CryptoCard from '../../components/CryptoCard/CryptoCard';


class Home extends Component {

  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }

  renderCrypto = () => {
    const { currencies } = this.props;

    if (!currencies) {
      return null;
    }

    return currencies.map(el => {
      let imgSrc = null;

      try {
        imgSrc = require(`../../../node_modules/cryptocurrency-icons/32/icon/${el.symbol.toLowerCase()}.png`);
      }
      catch (err) {
        imgSrc = null;
      }

      return (<CryptoCard symbol={el.symbol} key={el.symbol} imgSrc={imgSrc} />);
    });
  }

  render() {
    return (
      <div className="container-parent">
        <Nav />
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-half">
                <div>
                  <div className="column">
                    <h6 className="subtitle is-uppercas">
                      Crypto Currency
                    </h6>
                  </div>
                  <div className="column">
                    <h2 className="title">
                      Consulta aqui el valor actual de las criptomonedas
                    </h2>
                  </div>
                  <div className="column is-offset-12"></div>
                  <div className="column">
                    <input className="input is-rounded custom-input" type="text" placeholder="Buscar aqui" />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="card">
                  <div>
                    <h6>
                      Crypto Currency
                    </h6>
                  </div>
                  <div>
                    <h2>
                      Consulta aqui el valor actual de las criptomonedas
                    </h2>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-multiline is-mobile">
              {this.renderCrypto()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;