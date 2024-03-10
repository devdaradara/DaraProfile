import React from "react";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.webp";
import styled from "styled-components";

import RankingIcon from "../assets/icons/ranking.webp";
import CodeIcon from "../assets/icons/code.webp";
import BookIcon from "../assets/icons/book.webp";
import SchoolIcon from "../assets/icons/school.webp";

const Section = styled.div`
  height: 100vh;
  padding-top: 85px;
  padding-bottom: 20px;
  margin-top: -100px;
  background-color: #f5f5f5;
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

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 70px;
`;

const YearText = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 28px;
  color: #333;
  margin: 12px 30px 20px 0px;
`;

const DetailContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  border-left: 2px solid #333;
  margin-bottom: 10px;
`;


const OtherDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px 0px;
`;

const DetailIcon = styled.img`
  height: 26px;
  margin-right: 20px;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Pretendard;
  font-weight: 200;
  font-size: 22px;
  color: #333;
  text-align: center;
`;

const DetailBoldText = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  margin: 0px 5px;
  font-size: 22px;
  color: #333;
  text-align: center;
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
            <DetailText>덕성여자대학교 <DetailBoldText>성적우수</DetailBoldText> 입학</DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2022</YearText>
        <DetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={RankingIcon} />
            <DetailText>DS-데이터톤 <DetailBoldText>우수상</DetailBoldText></DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={SchoolIcon} />
            <DetailText>덕성여자대학교 컴퓨터공학과 <DetailBoldText>차석</DetailBoldText></DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText>개발 동아리 <DetailBoldText>"Corner"</DetailBoldText> 2기 활동</DetailText>
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
            <DetailText><DetailBoldText>ICT 이브와</DetailBoldText> (Gang Mate)</DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText>개발 동아리 <DetailBoldText>"Corner"</DetailBoldText> 3기 운영진 (기획 팀장)</DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={BookIcon} />
            <DetailText><DetailBoldText>"Swift Coding Club"</DetailBoldText> 2023 1분기 활동</DetailText>
          </OtherDetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={SchoolIcon} />
            <DetailText><DetailBoldText>교직이수</DetailBoldText>, 교육봉사 70시간</DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2024</YearText>
        <DetailContainer>
          <OtherDetailContainer>
            <DetailIcon src={CodeIcon} />
            <DetailText>ICT 한이음</DetailText>
          </OtherDetailContainer>
        </DetailContainer>
      </YearContainer>
    </Section>
  );
}

export default OthersSection;
