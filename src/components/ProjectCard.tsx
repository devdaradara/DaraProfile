import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: auto;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: rotateZ(5deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 0;
  padding: 20px;
  text-align: center;
`;

const Description = styled.p`
  padding: 0 20px 20px 20px;
  text-align: center;
`;

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [cardState, setCardState] = React.useState({
    xDeg: 0,
    yDeg: 0
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
        transform: `perspective(1000px) rotateX(${cardState.xDeg}deg) rotateY(${cardState.yDeg}deg)`
      }}
    >
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </Card>
  );
};