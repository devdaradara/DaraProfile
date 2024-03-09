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
  font-family: Pretendard;
  font-weight: 900;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
  width: calc(300px * 3 + 40px * 2);
  margin: 20px auto;
`;

const ArrowButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 10;
`;

const LeftArrow = styled(ArrowButton)`
  left: calc(50% - (300px * 3 + 40px * 2) / 2 - 60px);
`;

const RightArrow = styled(ArrowButton)`
  right: calc(50% - (300px * 3 + 40px * 2) / 2 - 60px);
`;

const ArrowImg = styled.img`
  width: 50px;
  height: 50px;
  display: block;
`;

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState<ProjectDetailType | null>(null);
  
  const [startIndex, setStartIndex] = useState(0);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);


  const nextProjects = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % ProjectData.length);
  };

  const prevProjects = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + ProjectData.length) % ProjectData.length);
  };

  const onProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
    const projectDetail = ProjectDetailData.find(detail => detail.id === project.id);
    setSelectedProjectDetail(projectDetail || null);
  };

  const displayedProjects = [];
  for (let i = 0; i < 3; i++) {
    displayedProjects.push(ProjectData[(startIndex + i) % ProjectData.length]);
  }

  return (
    <Section id="projects">
      <Link to="projects" smooth={true} duration={500}>
        <TitleContainer>
          <TitleLink src={LinkIcon} alt="LinkIcon" />
          <TitleText>Projects</TitleText>
        </TitleContainer>
      </Link>
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
      {selectedProjectDetail && <ProjectDetail detail={selectedProjectDetail} />}
    </Section>
  );
}

export default ProjectsSection;
