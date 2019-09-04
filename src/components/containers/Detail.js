import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailView from '../DetailView';
import { fetchDetails } from '../../actions/temps';
import { getDetailTemps, getDetailName } from '../../selectors/tempsSelectors';

class Detail extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    temps: PropTypes.array.isRequired
  }

  componentDidMount() {
    const { match, fetch } = this.props;
    fetch(match.params.id);
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
