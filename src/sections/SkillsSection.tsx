import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh; 
  padding-top: 85px;
  margin-top: -100px;
  margin-bottom: 100px;
  background-color: #f5f5f5;
`;

function SkillsSection() {
  return (
    <Section id="skills">
      SkillsSection Content
    </Section>
  );
}

export default SkillsSection;
