import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.png";

const Section = styled.div`
  height: 100vh;
  padding-top: 85px;
  margin-top: -100px;
  margin-bottom: 100px;
  background-color: #f5f5f5;
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
  font-family: Pretendard6;
`;

function SkillsSection() {
  return (
    <Section id="skills">
      <Link to="skills" smooth={true} duration={500}>
        <TitleContainer>
          <TitleLink src={LinkIcon} alt="UserIcon" />
          <TitleText>Skills</TitleText>
        </TitleContainer>
      </Link>
    </Section>
  );
}

export default SkillsSection;
