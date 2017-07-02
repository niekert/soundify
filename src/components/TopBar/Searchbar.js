import React from 'react';
import PropTypes from 'prop-types';
import { trim } from 'lodash';
import SearchIcon from 'components/icons/SearchIcon';
import { compose, withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  left: 30px;
  color: #222326;
`;

const Input = styled.input`
  margin-left: 25px;
  height: 22px;
  width: 300px;
  align-self: center;
  height: 30px;
  padding: 5px 12px 4px 30px;
  font-size: 14px;
  line-height: 19px;
  color: #3e3e40;
  background-color: #dfe0e6;
  background-image: none;
  border: 1px solid #dfe0e6;
  border-radius: 3px;
`;

const enhance = compose(
  withState('query', 'setQuery', ''),
  withHandlers({
    onChange: ({ setQuery }) => e => setQuery(e.target.value),
    onSubmit: ({ history, query }) => e => {
      e.preventDefault();

      if (!trim(query).length) {
        return;
      }

      history.push(`/search/${query}`);
    },
  }),
);

const Searchbar = enhance(({ query, onChange, onSubmit }) =>
  <Form onSubmit={onSubmit}>
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
    <Input
      type="text"
      placeholder="Search"
      value={decodeURIComponent(query)}
      onChange={onChange}
    />
  </Form>,
);
Searchbar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  query: PropTypes.string,
};
Searchbar.defaultProps = {
  query: '',
};

export default withRouter(Searchbar);
