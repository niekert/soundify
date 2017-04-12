import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitSearch } from 'actions/timelineActions';
import { timelineById } from 'selectors/timeline';
import { OK, INITIAL } from 'constants';
import SearchResults from 'components/SearchResults';

class SearchResultContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    submitSearch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { query } = this.props.match.params;
    this.props.submitSearch(query);
  }

  componentWillReceiveProps(nextProps) {
    const { query: nextQuery } = nextProps.match.params;
    if (nextQuery !== this.props.match.params.query) {
      this.props.submitSearch(nextQuery);
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
})(SearchResultContainer);
