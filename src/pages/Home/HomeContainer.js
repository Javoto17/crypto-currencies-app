import { connect } from 'react-redux';
import Home from './Home';
import { getCurrencies } from '../../actions/cryptoActions';

export default connect(
  state => ({
    currencies: state.cryptoReducer.currencies,
  }), {
    getCurrencies,
  },
)(Home);
