import React from 'react';
import styled from 'styled-components';

const DetailSection = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface Project {
  title: string;
  description: string;
  image: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <DetailSection>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Image src={project.image} alt={project.title} />
      <CloseButton onClick={onClose}>닫기</CloseButton>
    </DetailSection>
  );
};
