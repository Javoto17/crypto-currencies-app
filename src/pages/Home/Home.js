import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Home.scss';

import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import CryptoCard from '../../components/CryptoCard/CryptoCard';


class Home extends Component {

  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }

  onChangeInput = (event) => {
    const { filterCurrencies } = this.props;

    console.log(event.target.value);

    const text = event.target.value;

    filterCurrencies(text);
  };

  renderCrypto = () => {
    const { filteredCurrencies } = this.props;

    if (!filteredCurrencies) {
      return null;
    }

    return filteredCurrencies.map(el => {
      const { quote, name } = el;
      const currency = quote[Object.keys(quote)[0]];

      let imgSrc = null;

      try {
        imgSrc = require(`../../../node_modules/cryptocurrency-icons/128/icon/${el.symbol.toLowerCase()}.png`);
      }
      catch (err) {
        imgSrc = null;
      }

      return (
        <CryptoCard
          symbol={el.symbol}
          key={el.symbol}
          imgSrc={imgSrc}
          currency={currency}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="container-parent">
        <div className="search-section">
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
                      <Search onChange={this.onChangeInput} />
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  {/* <div className="card">
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
                </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="hero-body cryptos-section">
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


Home.propTypes = {
  filteredCurrencies: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string,
  })),
  getCurrencies: PropTypes.func,
  filterCurrencies: PropTypes.func,
};

Home.defaultProps = {
  getCurrencies: PropTypes.func,
  filterCurrencies: PropTypes.func,
};

export default Home;