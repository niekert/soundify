import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitSearch, setActiveTimeline } from 'actions/timelineActions';
import { timelineById } from 'selectors/timeline';
import { OK, INITIAL } from 'constants';
import SearchResults from 'components/SearchResults';

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
    const { params } = this.props.match;

    return (
      <SearchResults
        query={params.query}
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const query = ownProps.match.params.query;
  const id = `search::${query}`;

  const searchResults = timelineById(state, id);

  return {
    status: searchResults ? searchResults.status : INITIAL,
    trackIds: searchResults ? searchResults.tracks : [],
  };
}

export default connect(mapStateToProps, {
  submitSearch,
  setActiveTimeline,
})(SearchResultContainer);
