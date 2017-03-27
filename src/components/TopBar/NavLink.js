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

class NavLink extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object,
    history: PropTypes.object,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    location: {},
    history: {},
    to: '',
  };

  render() {
    const {
      match,
      children,
      location, // eslint-disable-line
      history, // eslint-disable-line
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
