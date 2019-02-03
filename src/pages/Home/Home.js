import React, { Component } from 'react';
import './Home.scss';

import Nav from '../../components/Nav/Nav';

class Home extends Component {

  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }


  render() {
    const { currencies } = this.props;

    console.log(currencies);

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
      </div>
    );
  }
}

export default Home;