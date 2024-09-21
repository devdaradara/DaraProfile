import React from "react";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.webp";
import styled from "styled-components";

import RankingIcon from "../assets/icons/ranking.webp";
import CodeIcon from "../assets/icons/code.webp";
import BookIcon from "../assets/icons/book.webp";
import SchoolIcon from "../assets/icons/school.webp";

const Section = styled.div`
  padding-top: 85px;
  padding-bottom: 50px;
  margin-top: -100px;
  background-color: #f9f9f9;

  @media (max-width: 1200px) {
    min-height: auto;
    padding-top: 60px;
    padding-bottom: 15px;
    margin-top: -80px;
  }

  @media (max-width: 900px) {
    padding-top: 40px;
    padding-bottom: 10px;
    margin-top: -60px;
  }

  @media (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 5px;
    margin-top: -40px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 20px;
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

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 70px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 0;
    margin-bottom: 15px;
  }
`;

const YearText = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 28px;
  color: #333;
  margin: 12px 30px 20px 0px;

  @media (max-width: 1200px) {
    font-size: 24px;
  }

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    margin: 8px 0;
  }
`;

const DetailContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  border-left: 2px solid #333;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    width: 450px;
  }

  @media (max-width: 900px) {
    width: 400px;
    padding-left: 20px;
  }

  @media (max-width: 600px) {
    width: 90%;
    padding-left: 15px;
  }
`;

const OtherDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 12px 0px;
`;

const DetailIcon = styled.img`
  height: 26px;
  margin-right: 20px;

  @media (max-width: 1200px) {
    height: 24px;
  }

  @media (max-width: 900px) {
    height: 22px;
    margin-right: 15px;
  }

  @media (max-width: 600px) {
    height: 20px;
    margin-right: 10px;
  }
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Pretendard;
  font-weight: 200;
  font-size: 22px;
  color: #333;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const DetailBoldText = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  margin: 0px 5px;
  font-size: 22px;
  color: #333;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

function OthersSection() {
  return (
    <Section id="others">
      <Link to="others" smooth={true} duration={500}>
        <TitleContainer>
          <TitleLink src={LinkIcon} alt="LinkIcon" />
          <TitleText>Others</TitleText>
        </TitleContainer>
      </Link>

      <YearContainer>
        <YearText>2021</YearText>
        <DetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={SchoolIcon} />
            <DetailText>
              덕성여자대학교 <DetailBoldText>성적우수</DetailBoldText> 입학
            </DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2022</YearText>
        <DetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={RankingIcon} />
            <DetailText>
              DS-데이터톤 <DetailBoldText>우수상</DetailBoldText>
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={SchoolIcon} />
            <DetailText>
              덕성여자대학교 컴퓨터공학과 <DetailBoldText>차석</DetailBoldText>
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText>
              개발 동아리 <DetailBoldText>"Corner"</DetailBoldText> 2기 활동
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText>자바(JAVA) 컴스터디, CTL 스터디</DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2023</YearText>
        <DetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={CodeIcon} />
            <DetailText>
              <DetailBoldText>ICT 이브와</DetailBoldText> (Gang Mate) 개발
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText>
              개발 동아리 <DetailBoldText>"Corner"</DetailBoldText> 3기 운영진{" "}
              <DetailBoldText>(기획 팀장)</DetailBoldText>
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText>
              <DetailBoldText>"Swift Coding Club"</DetailBoldText> 2023 1분기
              활동
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={CodeIcon} />
            <DetailText>
              <DetailBoldText>2023학년도 창업 동아리 "Corner"</DetailBoldText>
              활동
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={SchoolIcon} />
            <DetailText>
              <DetailBoldText>정보과정 교직이수</DetailBoldText>및 교육봉사
              70시간
            </DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2024</YearText>
        <DetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={CodeIcon} />
            <DetailText>
              <DetailBoldText>2024학년도 창업 동아리 "Corner"</DetailBoldText>
              활동
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={CodeIcon} />
            <DetailText>
              <DetailBoldText>ICT 한이음</DetailBoldText> (Story Teller){" "}
              <DetailBoldText>입상 수상</DetailBoldText>
            </DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={CodeIcon} />
            <DetailBoldText>2024 예비창업패키지</DetailBoldText>
            <DetailText>"러닝메이트" 창업 및 개발</DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>
    </Section>
  );
}

export default OthersSection;
