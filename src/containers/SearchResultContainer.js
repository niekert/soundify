import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitSearch, setActiveTimeline } from 'actions/timelineActions';

class SearchResultContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    setActiveTimeline: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { query } = this.props.match.params;

    this.props.submitSearch(query);
    this.props.setActiveTimeline(`search::${query}`);
  }

  componentWillReceiveProps(nextProps) {
    const { query: nextQuery } = nextProps.match.params;
    if (nextQuery !== this.props.match.params.query) {
      this.props.submitSearch(nextQuery);
      this.props.setActiveTimeline(`search::${nextQuery}`);
    }
  }

  render() {
    return null;
  }
}

export default connect(null, {
  submitSearch,
  setActiveTimeline,
})(SearchResultContainer);
