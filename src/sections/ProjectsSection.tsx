import React, { useState } from "react";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.webp";
import styled from "styled-components";
import { ProjectType, ProjectDetailType } from "../types/projectTypes";

import LeftArrowIcon from "../assets/icons/left-arrow.webp";
import RightArrowIcon from "../assets/icons/right-arrow.webp";
import LeftFillArrowIcon from "../assets/icons/left-fill-arrow.webp";
import RightFillArrowIcon from "../assets/icons/right-fill-arrow.webp";

import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetail } from "../components/ProjectDetail";
import { ProjectData } from "../data/ProjectData";
import { ProjectDetailData } from "../data/ProjectDetailData";

const Section = styled.div`
  position: relative;
  padding-top: 85px;
  margin-top: -100px;
  margin-bottom: 180px;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding-top: 70px;
    margin-top: -80px;
    margin-bottom: 150px;
  }

  @media (max-width: 900px) {
    padding-top: 50px;
    margin-top: -60px;
    margin-bottom: 120px;
  }

  @media (max-width: 600px) {
    padding-top: 30px;
    margin-top: -40px;
    margin-bottom: 90px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
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

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
  width: calc(300px * 3 + 40px * 2);
  margin: 20px auto;

  @media (max-width: 1200px) {
    width: calc(300px * 2 + 20px);
  }

  @media (max-width: 900px) {
    width: calc(300px * 1 + 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ArrowButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 10;
  position: absolute;

  @media (max-width: 600px) {
    position: static;
    margin: 10px;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: calc(50% - (300px * 3 + 40px * 2) / 2 - 60px);

  @media (max-width: 1200px) {
    left: calc(50% - (300px * 2 + 20px) / 2 - 50px);
  }

  @media (max-width: 900px) {
    left: calc(50% - (300px * 1 + 10px) / 2 - 40px);
  }

  @media (max-width: 600px) {
    left: 0;
  }
`;

const RightArrow = styled(ArrowButton)`
  right: calc(50% - (300px * 3 + 40px * 2) / 2 - 60px);

  @media (max-width: 1200px) {
    right: calc(50% - (300px * 2 + 20px) / 2 - 50px);
  }

  @media (max-width: 900px) {
    right: calc(50% - (300px * 1 + 10px) / 2 - 40px);
  }

  @media (max-width: 600px) {
    right: 0;
  }
`;

const ArrowImg = styled.img`
  width: 50px;
  height: 50px;
  display: block;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;


function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [selectedProjectDetail, setSelectedProjectDetail] =
    useState<ProjectDetailType | null>(null);

  const [startIndex, setStartIndex] = useState(0);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  // ProjectData를 역순으로 설정
  const reversedProjectData = [...ProjectData].reverse();

  const nextProjects = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % reversedProjectData.length);
  };

  const prevProjects = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 3 + reversedProjectData.length) % reversedProjectData.length
    );
  };

  const onProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
    const projectDetail = ProjectDetailData.find(
      (detail) => detail.id === project.id
    );
    setSelectedProjectDetail(projectDetail || null);
  };

  const displayedProjects = [];
  for (let i = 0; i < 3; i++) {
    displayedProjects.push(
      reversedProjectData[(startIndex + i) % reversedProjectData.length]
    );
  }

  return (
    <Section id="projects">
      <Link to="projects" smooth={true} duration={500}>
        <TitleContainer>
          <TitleLink src={LinkIcon} alt="LinkIcon" />
          <TitleText>Projects</TitleText>
        </TitleContainer>
      </Link>
      <ProjectCardContainer>
        <LeftArrow
          onClick={prevProjects}
          onMouseEnter={() => setIsHoveringLeft(true)}
          onMouseLeave={() => setIsHoveringLeft(false)}
        >
          <ArrowImg
            src={isHoveringLeft ? LeftFillArrowIcon : LeftArrowIcon}
            alt="Previous"
            style={{ opacity: 1 }}
          />
        </LeftArrow>
        <ProjectContainer>
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </ProjectContainer>
        <RightArrow
          onClick={nextProjects}
          onMouseEnter={() => setIsHoveringRight(true)}
          onMouseLeave={() => setIsHoveringRight(false)}
        >
          <ArrowImg
            src={isHoveringRight ? RightFillArrowIcon : RightArrowIcon}
            alt="Next"
            style={{ opacity: 1 }}
          />
        </RightArrow>
      </ProjectCardContainer>
      {selectedProjectDetail && (
        <ProjectDetail detail={selectedProjectDetail} />
      )}
    </Section>
  );
}

export default ProjectsSection;
