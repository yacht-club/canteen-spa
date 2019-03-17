import { connect } from 'react-redux';
import Canteen from 'components/Canteen';
import * as canteens from 'modules/canteens';
import * as cart from 'modules/cart';

const mapStateToProps = state => ({
  canteen: canteens.currentCanteenSelector(state),
  dishes: state.dishes.items,
});

const mapDispatchToProps = {
  addToCart: cart.addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canteen);
