import React from "react";
import styled from "styled-components";
import { scroller } from 'react-scroll';
import FireAnimation from "../components/FireAnimation";
import DownArrow from "../assets/icons/DownArrow.png";

const Section = styled.div`
  padding-top: 90px;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContext = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 20px;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 4px; 
    background-color: #FF4500; 
    margin: 20px auto 0;
  }
`;

const TitleText = styled.div`
  font-size: 54px;
  padding: 15px 0px;
  font-family: Pretendard6;
  color: #333;
`;

const TitleNameText = styled.div`
  font-size: 68px;
  font-family: Pretendard9;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
  font-family: Pretendard2;
  font-size: 24px;
  color: #333;
  max-width: 60%;
  text-align: center;
`;

const DescriptionText = styled.div`
  margin-top: 12px;
`;

const MoreButton = styled.img`
  margin-top: 30px;
  cursor: pointer;
  width: 50px;
  height: 50px;

  &:hover {
    opacity: 0.8;
  }
`;

function IntroduceSection() {
  const scrollToProfile = () => {
    scroller.scrollTo('profile', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <Section id="introduce">
      <FireAnimation />
      <TitleContext>
        <TitleText>세상을 변화시킬 작은 불씨</TitleText>
        <TitleNameText>류지예</TitleNameText>
        <TitleText>입니다</TitleText>
      </TitleContext>
      <DescriptionContainer>
        <DescriptionText>풀스택 개발자를 꿈꾸며 성장하는 대학생 개발자입니다.</DescriptionText>
        <DescriptionText>작은 불씨가 넓은 들판을 태우듯,</DescriptionText>
        <DescriptionText>저의 작은 노력과 지속적인 학습이 사회적 가치를 창출하기를 바랍니다.</DescriptionText>
      </DescriptionContainer>
      <MoreButton src={DownArrow} alt="더 알아보기" onClick={scrollToProfile} />
    </Section>
  );
}

export default IntroduceSection;
