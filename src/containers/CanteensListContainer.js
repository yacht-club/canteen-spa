import { connect } from 'react-redux';
import CanteensListStyled from 'components/CanteensListStyled';

const mapStateToProps = state => ({
  canteens: state.canteens.items,
});

export default connect(mapStateToProps)(CanteensListStyled);
