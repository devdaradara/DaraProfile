import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh; 
  padding-top: 100px;
  margin-top: -100px;
`;

function ProfileSection() {
  return (
    <Section id="profile">
      ProfileSection Content
    </Section>
  );
}

export default ProfileSection;
