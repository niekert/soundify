import React from 'react';
import styled from 'styled-components';
import QueueIcon from 'components/icons/PlayQueue';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  height: 200px;
`;

const Icon = styled(QueueIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
`;

const QueueEmpty = () => (
  <Wrapper>
    <Icon />
    Queue tracks by pressing the queue icon.
  </Wrapper>
);

export default QueueEmpty;
