import { connect } from 'react-redux';
import Canteen from 'components/Canteen';
import * as canteen from 'modules/canteens';

const mapStateToProps = state => ({
  canteens: state.canteens.items,
  selectedCanteenUid: state.canteens.selectedUid,
  dishes: state.dishes.items,
});

const mapDispatchToProps = {
  onClickGetCanteens: canteen.getCanteensStart,
  onChangeCanteen: canteen.setSelectedCanteen,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canteen);
