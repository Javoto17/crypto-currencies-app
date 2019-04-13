import { connect } from 'react-redux';
import Detail from './Detail';
import { fetchCurrency } from  '../../actions/cryptoActions';

export default connect(
  state => ({
    currencyDetail: state.cryptoReducer.currencyDetail,
  }),
  {
    fetchCurrency,
  }
)(Detail);
