import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  padding-top: 100px;
  margin-top: -100px;
`;

function BoardSection() {
  return (
    <Section id="board">
      BoardSection Content
    </Section>
  );
}

export default BoardSection;