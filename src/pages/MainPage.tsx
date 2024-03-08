import React from 'react';
import styled from "styled-components";

import IntroduceSection from '../sections/IntroduceSection';
import ProfileSection from '../sections/ProfileSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import OthersSection from '../sections/OthersSection';
// import BoardSection from '../sections/BoardSection';

const Main = styled.div`
  font-size: 40px;
  margin-top: 92px;
`;

function MainPage() {
  return (
    <Main>
      <IntroduceSection />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <OthersSection />
      {/* <BoardSection /> */}
    </Main>
  )
}

export default MainPage;
