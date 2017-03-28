import React, { PropTypes } from 'react';
import Searchbar from 'components/TopBar/Searchbar';
import { submitSearch, onChange } from 'actions/searchActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const SearchbarContainer = props => <Searchbar {...props} />;
SearchbarContainer.propTypes = {
  query: PropTypes.string,
};
SearchbarContainer.defaultProps = {
  query: '',
};

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps, {
  submitSearch,
  onChange,
})(withRouter(SearchbarContainer));
