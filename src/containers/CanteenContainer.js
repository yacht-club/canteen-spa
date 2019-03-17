import { connect } from 'react-redux';
import Canteen from 'components/Canteen';
import * as canteens from 'modules/canteens';
import * as cart from 'modules/cart';
import * as filters from 'modules/filters';
import * as selectors from 'modules/selectors';

const mapStateToProps = state => ({
  canteen: canteens.currentCanteenSelector(state),
  dishes: selectors.filteredDishes(state),
  filters: state.filters.availableCategories,
});

const mapDispatchToProps = {
  addToCart: cart.addToCart,
  onClearFilters: filters.resetSelectedCategory,
  onChangeFilter: filters.setSelectedCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canteen);
