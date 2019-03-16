import { connect } from 'react-redux';
import Canteen from 'components/Canteen';
import * as canteen from 'modules/canteens';

const mapStateToProps = state => ({
  canteens: state.canteens.items,
});

const mapDispatchToProps = {
  onClickGetCanteens: canteen.getCanteensStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canteen);
