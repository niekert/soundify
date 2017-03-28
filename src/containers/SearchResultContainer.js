import React, { PropTypes, Component } from 'react';
import { submitSearch } from 'actions/searchActions';
import { trackIdsFromQuery } from 'selectors/search';
import { connect } from 'react-redux';

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
    return <span>result</span>;
  }
}

function mapStateToProps(state) {
  const { results, query } = state.search;
  return {
    tracks: trackIdsFromQuery(results, query),
  };
}

export default connect(mapStateToProps, {
  submitSearch,
})(SearchResultContainer);
