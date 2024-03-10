import React from "react";
import styled from "styled-components";

import { ProjectType } from "../types/projectTypes";

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

const Card = styled.div`
  width: 300px;
  height: auto;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Title = styled.h3`
  margin-top: 20px; 
  padding: 0 20px;
  text-align: center;
  font-family: 'Pretendard'
  font-weight: 600;
  font-size: 24px;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: center;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  margin-top: 10px;
  padding: 0px 30px;
  text-align: center;
  font-family: 'Pretendard'
  font-weight: 200;
  font-size: 16px;
  line-height: 1.5;
  white-space: normal;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: center;
`;

const TechStack = styled.p`
  padding: 0 20px 20px;
  text-align: center;
  font-family: 'Pretendard'
  font-weight: 400;
  font-size: 14px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 20px;
`;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => {
  const [cardState, setCardState] = React.useState({
    xDeg: 0,
    yDeg: 0,
  });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.nativeEvent.offsetX - width / 2) / 10;
    const y = -(e.nativeEvent.offsetY - height / 2) / 10;

    setCardState({ xDeg: y, yDeg: x });
  };

  const onMouseLeave = () => setCardState({ xDeg: 0, yDeg: 0 });

  return (
    <Card
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${cardState.xDeg}deg) rotateY(${cardState.yDeg}deg)`,
      }}
    >
      <Title>{project.title}</Title>
      <Image src={project.image} alt={project.title} />
      <Description>{project.description}</Description>
      <TechStack>{project.techStack}</TechStack>
    </Card>
  );
};
