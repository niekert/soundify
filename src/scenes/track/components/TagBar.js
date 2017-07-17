import React from 'react';
import styled from 'styled-components';
import { alpha } from 'utils/color';
import { trim } from 'lodash';
import { prop } from 'styled-tools';

const TAG_BAR_REGEX = /(?:[^\s"]+|"[^"]*")+/g;

const Wrapper = styled.ul`
  display: flex;
  margin-top: 10px;
`;

const Tag = styled.li`
  margin-right: ${prop('theme.spacing.space2')};
  color: ${props => alpha(props.theme.colors.cta, 0.7)};
`;

function TagBar({ tags }) {
  const tagItems = tags.match(TAG_BAR_REGEX);

  return (
    <Wrapper>
      {tagItems.map(tag =>
        <Tag key={tag}>
          #{trim(tag, '"')}
        </Tag>,
      )}
    </Wrapper>
  );
}

export default TagBar;
