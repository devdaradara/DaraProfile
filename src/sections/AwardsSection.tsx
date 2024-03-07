import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  padding-top: 100px;
  margin-top: -100px;
`;

function AwardsSection() {
  return (
    <Section id="awards">
      AwardsSection Content
    </Section>
  );
}

export default AwardsSection;
