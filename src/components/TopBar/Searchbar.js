import React, { PropTypes } from 'react';
import { trim } from 'lodash';
import SearchIcon from 'components/icons/SearchIcon';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 16px;
  width: 16px;
  left: 30px;
  color: #222326;
`;

const Input = styled.input`
  margin-left: 25px;
  height: 22px;
  width: 300px;
  align-self: center;
  height: 30px;
  padding: 5px 12px 4px 25px;
  font-size: 14px;
  line-height: 19px;
  color: #3e3e40;
  background-color: #dfe0e6;
  background-image: none;
  border: 1px solid #dfe0e6;
  border-radius: 3px;
`;

const Searchbar = ({ query, history, match, onChange }) => (
  <Form
    onSubmit={(e) => {
      e.preventDefault();
      if (!trim(query).length) {
        return;
      }

      history.push(`/search/${query}`);
    }}
  >
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
    <Input
      type="text"
      placeholder="Search"
      value={decodeURIComponent(query)}
      onChange={ev => onChange(ev.target.value)}
    />
  </Form>
);
Searchbar.propTypes = {
  submitSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};
Searchbar.defaultProps = {
  query: '',
};

export default Searchbar;
