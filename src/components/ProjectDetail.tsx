import React, { useState, useEffect } from "react";
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
  padding: 30px 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f9f9f9;

  @media (max-width: 1200px) {
    width: 90%;
    padding: 25px 0px;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 20px 0px;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 15px 0px;
  }
`;

const MidColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

const AnotherColumn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const RightColumn = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    padding: 10px 0;
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-family: Pretendard;
  font-weight: 900;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 30px;
    margin-bottom: 15px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const GitHubLink = styled.a`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  color: #333;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;


const Image = styled.img`
  width: auto;
  max-width: 80%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    max-width: 90%;
    max-height: 300px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    max-height: 200px;
  }
`;

const SliderArrow = styled.button`
  cursor: pointer;
  background-color: #F5F5F5;
  border: none;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  z-index: 10;

  @media (max-width: 600px) {
    padding: 8px;
  }
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
  background-color: #F5F5F5;
  padding: 5px;
  border-radius: 12px;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

const DetailTextRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

const DetailTitleText = styled.div`
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
  margin-bottom: 10px;
  margin-right: 10px;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const DetailContentText = styled.div`
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 200;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const BulletPoint = styled.li`
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 200;
  margin-bottom: 5px;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ detail }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [detail]);

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
        <DetailContentText>{detail.oneLine}</DetailContentText>
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

          <DetailTextRowContainer>
            <DetailTitleText>제작 기간</DetailTitleText>
            <DetailContentText>{detail.productionPeriod}</DetailContentText>
          </DetailTextRowContainer>

          <DetailTextRowContainer>
            <DetailTitleText>기술 스택</DetailTitleText>
            <DetailContentText>{detail.techStack.join(", ")}</DetailContentText>
          </DetailTextRowContainer>

          <DetailTextContainer style={{ paddingBottom: "10px" }}>
            <DetailTitleText>사용된 기술 및 주요 기능</DetailTitleText>
            <ul style={{ margin: "10px", paddingLeft: "20px" }}>
              {detail.usedTechnologies.map((tech, index) => (
                <BulletPoint key={index}>{tech}</BulletPoint>
              ))}
            </ul>
          </DetailTextContainer>
        </RightColumn>
      </AnotherColumn>
    </DetailSection>
  );
};
