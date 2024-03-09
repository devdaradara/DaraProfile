import React from 'react';
import styled from 'styled-components';
import { ProjectDetailType } from '../types/projectTypes';

interface ProjectDetailProps {
  detail: ProjectDetailType;
}

const DetailSection = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  background-color: white;
`;

const LeftColumn = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightColumn = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const GitHubLink = styled.a`
  margin-bottom: 20px;
  color: #333;
`;

const ProductionPeriod = styled.p`
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const Tech = styled.div`
  margin-bottom: 20px;
`;

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ detail }) => {
  return (
    <DetailSection>
      <LeftColumn>
        <Image src={detail.image} alt={detail.title} />
        <Title>{detail.title}</Title>
        <GitHubLink href={detail.githubLink}>GitHub Link</GitHubLink>
        <ProductionPeriod>제작 기간: {detail.productionPeriod}</ProductionPeriod>
      </LeftColumn>
      <RightColumn>
        <Description>{detail.description}</Description>
        <Tech>사용 기술: {detail.usedTechnologies.join(', ')}</Tech>
        <Tech>기술 스택: {detail.techStack.join(', ')}</Tech>
      </RightColumn>
    </DetailSection>
  );
};
