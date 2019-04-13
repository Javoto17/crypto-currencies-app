import { connect } from 'react-redux';
import Home from './Home';
import { getCurrencies, filterCurrencies } from '../../actions/cryptoActions';

export default connect(
  state => ({
    currencies: state.cryptoReducer.currencies,
    filteredCurrencies: state.cryptoReducer.filteredCurrencies
  }),
  {
    getCurrencies,
    filterCurrencies
  }
)(Home);
