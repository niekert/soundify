import React, { PropTypes } from 'react';
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

const Searchbar = ({ onSearch }) => (
  <Form
    onSubmit={onSearch}
  >
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
    <Input
      type="text"
    />
  </Form>
);

export default Searchbar;
