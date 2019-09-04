import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Temps from '../temps/Temps';
import HighAndLow from '../highAndLow/HighAndLow';
import { connect } from 'react-redux';
import { fetchTemps, fetchHighTemp, fetchLowTemp, fetchAvgTemp } from '../../actions/temps';
import { getTemps, getHighTemp, getLowTemp, getAvgTemp } from '../../selectors/tempsSelectors';

class Homepage extends PureComponent {
  static propTypes = {
    temps: PropTypes.arrayOf(PropTypes.shape({
      temp: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    lowTemp: PropTypes.shape({
      name: PropTypes.string.isRequired,
      temp: PropTypes.number
    }).isRequired,
    highTemp: PropTypes.shape({
      name: PropTypes.string.isRequired,
      temp: PropTypes.number
    }).isRequired,
    avgTemp: PropTypes.number,
    fetchTemps: PropTypes.func.isRequired,
    fetchHigh: PropTypes.func.isRequired,
    fetchLow: PropTypes.func.isRequired,
    fetchAvg: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchTemps();
    this.props.fetchHigh();
    this.props.fetchLow();
    this.props.fetchAvg();
  }

  render() {
    const { temps, highTemp, lowTemp, avgTemp } = this.props;
    return (
      <>
        <Temps temps={temps} />
        <HighAndLow highTemp={highTemp} lowTemp={lowTemp} avgTemp={avgTemp} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  temps: getTemps(state),
  highTemp: getHighTemp(state),
  lowTemp: getLowTemp(state),
  avgTemp: getAvgTemp(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTemps() {
    dispatch(fetchTemps());
  },
  fetchHigh() {
    dispatch(fetchHighTemp());
  },
  fetchLow() {
    dispatch(fetchLowTemp());
  },
  fetchAvg() {
    dispatch(fetchAvgTemp());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
