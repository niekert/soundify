import React from 'react';
import { node } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div``;

export const Item = styled(NavLink)`
`;
Item.defaultProps = {
  activeClassName: 'tabActive',
};

function TabBar({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

TabBar.propTypes = {
  children: node.isRrequired,
};

export default TabBar;
