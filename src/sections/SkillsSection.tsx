import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.webp";

import ReactIcon from "../assets/icons/skills/react.webp";
import HtmlIcon from "../assets/icons/skills/html.webp";
import CssIcon from "../assets/icons/skills/css.webp";
import JavaScriptIcon from "../assets/icons/skills/java-script.webp";
import TypeScriptIcon from "../assets/icons/skills/type-script.webp";

import JavaIcon from "../assets/icons/skills/java.webp";
import PythonIcon from "../assets/icons/skills/python.webp";
import SpringBootIcon from "../assets/icons/skills/spring-boot.webp";
import NodeJsIcon from "../assets/icons/skills/node.webp";
import FireBaseIcon from "../assets/icons/skills/firebase.webp";

import SwiftIcon from "../assets/icons/skills/swift.webp";
import KotlinIcon from "../assets/icons/skills/kotlin.webp";
import AndroidStudioIcon from "../assets/icons/skills/android-studio.webp";

import JiraIcon from "../assets/icons/skills/jira.webp";
import FigmaIcon from "../assets/icons/skills/figma.webp";
import GitIcon from "../assets/icons/skills/git.webp";
import GitHubIcon from "../assets/icons/skills/github.webp";

const Section = styled.div`
  padding-top: 85px;
  margin-top: -100px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding-top: 70px;
    margin-top: -80px;
  }

  @media (max-width: 900px) {
    padding-top: 50px;
    margin-top: -60px;
  }

  @media (max-width: 600px) {
    padding-top: 30px;
    margin-top: -40px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TitleLink = styled.img`
  height: 50px;
  margin-right: 20px;

  @media (max-width: 600px) {
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const TitleText = styled.div`
  font-size: 60px;
  padding: 12px 0px;
  font-family: Pretendard;
  font-weight: 900;

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const AllSkillContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const SkillTitle = styled.div`
  margin-top: 10px;
  font-size: 34px;
  font-family: Pretendard;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 30px;
  }

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const SkillBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px 0 15px;
  flex-wrap: wrap;
`;

const SkillBadgeImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  border-radius: 23px;

  @media (max-width: 1200px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
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

  @media (max-width: 1200px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }

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

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const SkillOverlayTitle = styled.div`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  text-align: center; 
  margin-bottom: 5px;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const SkillOverlayText = styled.div`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  text-align: center; 

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
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
              <SkillBadgeImg src={ReactIcon} alt="React" />
              <SkillOverlay>
                <SkillOverlayTitle>React Native</SkillOverlayTitle>
                <SkillOverlayText>90%</SkillOverlayText>
              </SkillOverlay>
            </SkillBadge>
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
