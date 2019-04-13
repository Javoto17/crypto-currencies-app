import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from '../../components/Nav/Nav';
import Chart from '../../components/Chart/Chart';


class Detail extends Component {
  componentDidMount() {
    const { match: { params: { id } }, fetchCurrency } = this.props;

    fetchCurrency(id.toUpperCase(), 'EUR', 6);
  }

  render() {
    const { currencyDetail } = this.props;

    return (
      <div>
        <Nav />
        <div className="hero-body">
          <div className="column is-full">
            <div className="is-inline-flex is-full">
              <div className="is-three-fifths">

              </div>
              <div className="is-three-fifths">

              </div>
              <div className="is-three-fifths">

              </div>
            </div>
          </div>
          <div>
            {currencyDetail && currencyDetail.historial && (
              <Chart data={currencyDetail.historial} />
            )}
          </div>
        </div>
      </div>
    );
  }
}


Detail.propTypes = {
  currencyDetail: PropTypes.shape({
    historial: PropTypes.array,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    })
  }),
  fetchCurrency: PropTypes.func,
  filterCurrencies: PropTypes.func,
};

Detail.defaultProps = {
  currencyDetail: null,
  match: {
    params: null,
  },
  fetchCurrency: PropTypes.func,
  filterCurrencies: PropTypes.func,
};

export default Detail;