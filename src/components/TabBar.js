import React from 'react';
import { node } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`margin-left: 10px;`;

export const Item = styled(NavLink)`
  display: inline-block;
  padding: 20px 0 10px;
  margin-right: 20px;
  color: ${prop('theme.colors.reverse.primaryText')};
  text-decoration: none;
  text-align: center;

  &.tabActive {
    color: ${prop('theme.colors.cta')};
    border-bottom: 2px solid ${prop('theme.colors.cta')};
  }
`;

Item.defaultProps = {
  activeClassName: 'tabActive',
  exact: true,
};

function TabBar({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

TabBar.propTypes = {
  children: node.isRequired,
};

export default TabBar;
