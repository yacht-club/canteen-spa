import { connect } from 'react-redux';
import Header from 'components/Header';
import * as filters from 'modules/filters';
import * as canteens from 'modules/canteens';

const mapStateToProps = state => ({
  categories: state.filters.availableCategories,
  selectedCategory: state.filters.selectedCategory,
  page: canteens.currentCanteenSelector(state),
});

const mapDispatchToProps = {
  onResetCategoryFilter: filters.resetSelectedCategory,
  onChangeCategoryFilter: filters.setSelectedCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
