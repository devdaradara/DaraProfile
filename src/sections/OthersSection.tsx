import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  padding-top: 100px;
  margin-top: -100px;
`;

function OthersSection() {
  return (
    <Section id="others">
      OthersSection Content
    </Section>
  );
}

export default OthersSection;
