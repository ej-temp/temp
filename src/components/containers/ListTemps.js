import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Temps from '../temps/Temps';
import { connect } from 'react-redux';
import { fetchTemps, } from '../../actions/temps';
import { getTemps } from '../../selectors/tempsSelectors';

class ListTemps extends PureComponent {
  static propTypes = {
    temps: PropTypes.arrayOf(PropTypes.shape({
      temp: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { temps } = this.props;
    return <Temps temps={temps} />;
  }
}

const mapStateToProps = state => ({
  temps: getTemps(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTemps());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTemps);
