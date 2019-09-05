import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailView from '../DetailView';
import { fetchDetails, clearDetail } from '../../actions/temps';
import { getDetailTemps, getDetailName } from '../../selectors/tempsSelectors';

class Detail extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    temps: PropTypes.array.isRequired,
    clear: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { match, fetch } = this.props;
    fetch(match.params.id);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    const { name, temps } = this.props;
    return <DetailView name={name} temps={temps} />;
  }
}

const mapStateToProps = state => ({
  temps: getDetailTemps(state),
  name: getDetailName(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: (id) => dispatch(fetchDetails(id)),
  clear: () => dispatch(clearDetail())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
