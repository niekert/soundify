import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { submitSearch } from 'actions/searchActions';
import { trackIdsFromQuery } from 'selectors/search';
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
    const params = this.props.match.params;
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
  const { results, status } = state.search;

  return {
    status,
    trackIds: trackIdsFromQuery(results, query),
  };
}

export default connect(mapStateToProps, {
  submitSearch,
})(SearchResultContainer);
