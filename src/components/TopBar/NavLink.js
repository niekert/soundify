import React, { PropTypes, PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  padding: 0 15px;
  color: ${props => props.active ?
    props.theme.colors.primaryText :
    props.theme.colors.secondaryText
  };
  text-decoration: none;
  outline: none;

  &:hover {
    color: ${props => props.theme.colors.primaryText}
  }

  &.${props => props.activeClassName} {
    color: ${props => props.theme.colors.primaryText}
  }
`;

class NavLink extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  render () {
    const {
      match,
      children,
      location,
      history,
      to,
      ...props
    } = this.props;

    const active = match && match.url === to;

    return (
      <Wrapper
        active={active}
        to={to}
        {...props}
      >
        {children}
      </Wrapper>
    );
  }
}

export default withRouter(NavLink);
