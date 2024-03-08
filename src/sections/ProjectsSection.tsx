import React from 'react';
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.png";
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  padding-top: 85px;
  margin-top: -100px;
  margin-bottom: 180px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const TitleLink = styled.img`
  height: 50px;
  margin-right: 20px;
`;

const TitleText = styled.div`
  font-size: 60px;
  padding: 12px 0px;
  font-family: Pretendard9;
`;

function ProjectsSection() {
  return (
    <Section id="projects">
    <Link to="projects" smooth={true} duration={500}>
      <TitleContainer>
        <TitleLink src={LinkIcon} alt="LinkIcon" />
        <TitleText>Project</TitleText>
      </TitleContainer>
    </Link>
    </Section>
  );
}

export default ProjectsSection;
