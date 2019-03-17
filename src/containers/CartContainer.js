import { connect } from 'react-redux';
import Cart from 'components/Cart';
import { joinCartWithDishes } from 'modules/selectors';

const mapStateToProps = state => ({
  cartItems: joinCartWithDishes(state),
});

export default connect(mapStateToProps)(Cart);
