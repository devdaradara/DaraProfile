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
  padding-bottom: 2em;
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

const SkillBadgeImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  border-radius: 23px;
`;

const SkillBadge = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 23px;
  box-shadow: 0px 0px 10px 0px #666666;
  margin: 0px 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 15px 5px #666666;

    > div {
      top: 0;
    }
  }
`;

const SkillOverlay = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: top 0.3s ease;
  border-radius: 23px;
`;

const SkillOverlayTitle = styled.div`
  font-size: 16px;
  font-family: Pretendard6;
  text-align: center; 
  margin-bottom: 5px;
`;

const SkillOverlayText = styled.div`
  font-size: 16px;
  font-family: Pretendard4;
  text-align: center; 
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
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={ReactIcon} alt="React" />
              <SkillOverlay>
                <SkillOverlayTitle>React</SkillOverlayTitle>
                <SkillOverlayText>90%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={HtmlIcon} alt="HTML" />
              <SkillOverlay>
                <SkillOverlayTitle>HTML</SkillOverlayTitle>
                <SkillOverlayText>50%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={CssIcon} alt="CSS" />
              <SkillOverlay>
                <SkillOverlayTitle>CSS</SkillOverlayTitle>
                <SkillOverlayText>50%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={JavaScriptIcon} alt="JavaScript" />
              <SkillOverlay>
                <SkillOverlayTitle>JavaScript</SkillOverlayTitle>
                <SkillOverlayText>70%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={TypeScriptIcon} alt="TypeScript" />
              <SkillOverlay>
                <SkillOverlayTitle>TypeScript</SkillOverlayTitle>
                <SkillOverlayText>70%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>Back-end</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={JavaIcon} alt="Java" />
              <SkillOverlay>
                <SkillOverlayTitle>Java</SkillOverlayTitle>
                <SkillOverlayText>80%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={PythonIcon} alt="Python" />
              <SkillOverlay>
                <SkillOverlayTitle>Python</SkillOverlayTitle>
                <SkillOverlayText>80%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={SpringBootIcon} alt="Spring Boot" />
              <SkillOverlay>
                <SkillOverlayTitle>Spring Boot</SkillOverlayTitle>
                <SkillOverlayText>80%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={NodeJsIcon} alt="Node.js" />
              <SkillOverlay>
                <SkillOverlayTitle>Node.js</SkillOverlayTitle>
                <SkillOverlayText>60%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={FireBaseIcon} alt="Firebase" />
              <SkillOverlay>
                <SkillOverlayTitle>Firebase</SkillOverlayTitle>
                <SkillOverlayText>60%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>App</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={SwiftIcon} alt="Swift" />
              <SkillOverlay>
                <SkillOverlayTitle>Swift</SkillOverlayTitle>
                <SkillOverlayText>70%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={KotlinIcon} alt="Kotlin" />
              <SkillOverlay>
                <SkillOverlayTitle>Kotlin</SkillOverlayTitle>
                <SkillOverlayText>60%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={AndroidStudioIcon} alt="Android Studio" />
              <SkillOverlay>
                <SkillOverlayTitle>Android Studio</SkillOverlayTitle>
                <SkillOverlayText>65%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>

        <SkillContainer>
          <SkillTitle>Tools</SkillTitle>
          <SkillBadgeContainer>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={JiraIcon} alt="Jira" />
              <SkillOverlay>
                <SkillOverlayTitle>Jira</SkillOverlayTitle>
                <SkillOverlayText>80%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={FigmaIcon} alt="Figma" />
              <SkillOverlay>
                <SkillOverlayTitle>Figma</SkillOverlayTitle>
                <SkillOverlayText>90%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={GitIcon} alt="Git" />
              <SkillOverlay>
                <SkillOverlayTitle>Git</SkillOverlayTitle>
                <SkillOverlayText>90%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
            <SkillBadge style={{ padding: "3px" }}>
              <SkillBadgeImg src={GitHubIcon} alt="GitHub" />
              <SkillOverlay>
                <SkillOverlayTitle>GitHub</SkillOverlayTitle>
                <SkillOverlayText>90%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
          </SkillBadgeContainer>
        </SkillContainer>
      </AllSkillContainer>
    </Section>
  );
}

export default SkillsSection;
