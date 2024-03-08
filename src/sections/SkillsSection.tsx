import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.png";

import ReactIcon from "../assets/icons/skills/react.png";
import HtmlIcon from "../assets/icons/skills/html.png";
import CssIcon from "../assets/icons/skills/css.png";
import JavaScriptIcon from "../assets/icons/skills/java-script.png";
import TypeScriptIcon from "../assets/icons/skills/type-script.png";

import JavaIcon from "../assets/icons/skills/java.png";
import PythonIcon from "../assets/icons/skills/python.png";
import SpringBootIcon from "../assets/icons/skills/spring-boot.png";
import NodeJsIcon from "../assets/icons/skills/node.png";
import FireBaseIcon from "../assets/icons/skills/firebase.png";

import SwiftIcon from "../assets/icons/skills/swift.png";
import KotlinIcon from "../assets/icons/skills/kotlin.png";
import AndroidStudioIcon from "../assets/icons/skills/android-studio.png";


import JiraIcon from "../assets/icons/skills/jira.png";
import FigmaIcon from "../assets/icons/skills/figma.png";
import GitIcon from "../assets/icons/skills/git.png";
import GitHubIcon from "../assets/icons/skills/github.png";


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

const AllSkillContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillTitle = styled.div`
  margin-top: 20px;
  font-size: 34px;
  font-family: Pretendard6;
`;

const SkillBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const SkillBadge = styled.div`
  height: 80px;
  background-color: #fff;
  border-radius: 23px;
  box-shadow: 0px 0px 10px 0px #666666;
  margin: 0px 10px;
`;

const SkillBadgeImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  border-radius: 23px;
`;

function SkillsSection() {
  return (
    <Section id="skills">
      <Link to="skills" smooth={true} duration={500}>
        <TitleContainer>
          <TitleLink src={LinkIcon} alt="LinkIcon" />
          <TitleText>Skills</TitleText>
        </TitleContainer>
      </Link>
      
      <AllSkillContainer>
        <SkillContainer>
          <SkillTitle>Front-end</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={ReactIcon} alt="ReactIcon"/>
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={HtmlIcon} alt="HtmlIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={CssIcon} alt="CssIcon" />
            </SkillBadge>
            <SkillBadge>
              <SkillBadgeImg src={JavaScriptIcon} alt="JavaScriptIcon" />
            </SkillBadge>
            <SkillBadge>
              <SkillBadgeImg src={TypeScriptIcon} alt="TypeScriptIcon" />
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>Back-end</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={JavaIcon} alt="JavaIcon" />
            </SkillBadge>
            <SkillBadge>
              <SkillBadgeImg src={PythonIcon} alt="PythonIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={SpringBootIcon} alt="SpringBootIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={NodeJsIcon} alt="NodeJsIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={FireBaseIcon} alt="FireBaseIcon" />
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>


        <SkillContainer>
          <SkillTitle>App</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={ReactIcon} alt="ReactIcon"/>
            </SkillBadge>
            <SkillBadge>
              <SkillBadgeImg src={SwiftIcon} alt="SwiftIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={KotlinIcon} alt="KotlinIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={AndroidStudioIcon} alt="AndroidStudioIcon" />
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>Tools</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={JiraIcon} alt="JiraIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={FigmaIcon} alt="FigmaIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={GitIcon} alt="GitIcon" />
            </SkillBadge>
            <SkillBadge style={{padding: "3px"}}>
              <SkillBadgeImg src={GitHubIcon} alt="GitHubIcon" />
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>
      </AllSkillContainer>
    </Section>
  );
}

export default SkillsSection;
