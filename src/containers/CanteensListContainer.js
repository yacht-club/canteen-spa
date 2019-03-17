import { connect } from 'react-redux';
import CanteensList from 'components/CanteensList';

const mapStateToProps = state => ({
  canteens: state.canteens.items,
});

export default connect(mapStateToProps)(CanteensList);
