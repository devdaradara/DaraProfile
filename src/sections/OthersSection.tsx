import React from "react";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.png";
import styled from "styled-components";
import OtherDetail from "../components/OtherDetail";

const Section = styled.div`
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
  font-family: Pretendard9;
`;

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 70px;
`;

const YearText = styled.div`
  font-family: Pretendard6;
  font-size: 30px;
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
  margin-bottom: 30px;
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
          <OtherDetail type="school" contents="덕성여자대학교 성적우수 입학" />
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2022</YearText>
        <DetailContainer>
          <OtherDetail type="ranking" contents="DS-데이터톤 우수상" />
          <OtherDetail type="school" contents="덕성여자대학교 컴퓨터공학과 차석" />
          <OtherDetail type="study" contents='개발 동아리 "Corner" 2기 활동' />
          <OtherDetail type="study" contents="자바(JAVA) 컴스터디, CTL 스터디" />
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2023</YearText>
        <DetailContainer>
          <OtherDetail type="code" contents="ICT 이브와 (Gang Mate)" />
          <OtherDetail type="study" contents='개발 동아리 "Corner" 3기 운영진 (기획 팀장)' />
          <OtherDetail type="study" contents='"Swift Coding Club" 2023 1분기 활동' />
          <OtherDetail type="school" contents="교직이수, 교육봉사 70시간" />
        </DetailContainer>
      </YearContainer>

      <YearContainer>
        <YearText>2024</YearText>
        <DetailContainer>
          <OtherDetail type="code" contents="ICT 한이음" />
        </DetailContainer>
      </YearContainer>
    </Section>
  );
}

export default OthersSection;
