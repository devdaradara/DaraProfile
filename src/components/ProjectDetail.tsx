import React, { useState } from "react";
import styled from "styled-components";
import { ProjectDetailType } from "../types/projectTypes";

interface ProjectDetailProps {
  detail: ProjectDetailType;
}

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
`;

const MidColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnotherColumn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* align-items: center; */
`;

const LeftColumn = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightColumn = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  font-family: Pretendard;
  font-weight: 900;
  margin-bottom: 20px;
`;

const GitHubLink = styled.a`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  color: #333;
`;

const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const SliderArrow = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  z-index: 10;
`;

const SliderArrowLeft = styled(SliderArrow)`
  left: 20px;
`;

const SliderArrowRight = styled(SliderArrow)`
  right: 20px;
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: #333;
  background-color: #fff;
  padding: 5px;
  border-radius: 12px;
`;

const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const DetailTitleText = styled.div`
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  margin-bottom: 10px;
`;

const DetailContentText = styled.div`
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 200;
  margin-bottom: 10px;
`;

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ detail }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : detail.images.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % detail.images.length);
  };

  return (
    <DetailSection>
      <MidColumn>
        <Title>{detail.title}</Title>
        <GitHubLink href={detail.githubLink}>GitHub</GitHubLink>
      </MidColumn>
      <AnotherColumn>
        <LeftColumn>
          <ImageSliderContainer>
            <Image
              src={detail.images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
            />
            <SliderArrowLeft onClick={handlePrevClick}>&lt;</SliderArrowLeft>
            <SliderArrowRight onClick={handleNextClick}>&gt;</SliderArrowRight>
            <ImageCounter>{`${currentImageIndex + 1}/${
              detail.images.length
            }`}</ImageCounter>
          </ImageSliderContainer>
        </LeftColumn>
        <RightColumn>
          <DetailTextContainer>
            <DetailContentText>{detail.description}</DetailContentText>
          </DetailTextContainer>
          <DetailTextContainer>
            <DetailTitleText>제작 기간</DetailTitleText>
            <DetailContentText>{detail.productionPeriod}</DetailContentText>
          </DetailTextContainer>
          <DetailTextContainer>
            <DetailTitleText>사용 기술</DetailTitleText>
            <DetailContentText>
              {detail.usedTechnologies.join(", ")}
            </DetailContentText>
          </DetailTextContainer>
          <DetailTextContainer>
            <DetailTitleText>기술 스택</DetailTitleText>
            <DetailContentText>{detail.techStack.join(", ")}</DetailContentText>
          </DetailTextContainer>
        </RightColumn>
      </AnotherColumn>
    </DetailSection>
  );
};
