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
  background: #f9f9f9;

  @media (max-width: 900px) {
    width: 250px;
    margin: 15px;
  }

  @media (max-width: 600px) {
    width: 200px;
    margin: 10px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 230px;
  height: 200px;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 200px;
    height: 180px;
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 160px;
  }
`;

const Title = styled.div`
  margin-top: 20px; 
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 22px;
  padding: 10px 0;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: 'Pretendard';
  font-weight: 200;
  font-size: 16px;
  line-height: 1.5;
  white-space: normal;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TechStack = styled.p`
  padding: 10px 20px 20px;
  text-align: center;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  border-top: 1px solid #ddd;

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
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
