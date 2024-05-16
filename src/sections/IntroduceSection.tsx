import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import FireAnimation from "../components/FireAnimation";

import DownArrow from "../assets/icons/DownArrow.webp";
import GithubIcon from "../assets/icons/github.webp";
import InstagramIcon from "../assets/icons/instagram.webp";
import TistoryIcon from "../assets/icons/tistory.webp";

const Section = styled.div`
  padding-top: 85px;
  margin-top: -100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  @media (max-width: 1200px) {
    padding-top: 60px;
    margin-top: -80px;
    margin-bottom: 80px;
  }

  @media (max-width: 900px) {
    padding-top: 40px;
    margin-top: -60px;
    margin-bottom: 60px;
  }

  @media (max-width: 600px) {
    padding-top: 20px;
    margin-top: -40px;
    margin-bottom: 40px;
  }
`;

const TitleContext = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 20px;

  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 4px;
    background-color: #ff4500;
    margin: 10px auto 0;

    @media (max-width: 600px) {
      width: 60%;
    }
  }
`;

const TitleText = styled.div`
  font-size: 34px;
  padding: 12px 0px;
  font-family: Pretendard;
  font-weight: 600;
  color: #333;

  @media (max-width: 1200px) {
    font-size: 30px;
  }

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const TitleNameText = styled.div`
  font-size: 38px;
  font-family: Pretendard;
  font-weight: 900;

  @media (max-width: 1200px) {
    font-size: 34px;
  }

  @media (max-width: 900px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const DescriptionContainer = styled.div`
  font-family: Pretendard;
  font-weight: 200;
  font-size: 20px;
  color: #333;
  max-width: 60%;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    max-width: 80%;
  }
`;

const DescriptionText = styled.div`
  margin-top: 10px;

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const MoreButton = styled.img`
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
  width: 40px;
  height: 40px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

const ImageDiv = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    padding: 4px;
  }
`;

function IntroduceSection() {
  const scrollToProfile = () => {
    scroller.scrollTo("profile", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
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
        <DescriptionText>
          풀스택 개발자를 꿈꾸며 성장하는 대학생 개발자입니다.
        </DescriptionText>
        <DescriptionText>작은 불씨가 넓은 들판을 태우듯,</DescriptionText>
        <DescriptionText>
          저의 작은 노력과 지속적인 학습이 사회적 가치를 창출하기를 바랍니다.
        </DescriptionText>
      </DescriptionContainer>

      <ImageContainer>
        <a
          href="https://github.com/devdaradara"
          target="_blank"
          rel="noreferrer"
        >
          <ImageDiv src={GithubIcon} alt="깃허브" />
        </a>
        <a
          href="https://daradarav.tistory.com/"
          target="_blank"
          rel="noreferrer"
        >
          <ImageDiv src={TistoryIcon} alt="티스토리" />
        </a>
        <a
          href="https://www.instagram.com/jiye.ryu/"
          target="_blank"
          rel="noreferrer"
        >
          <ImageDiv src={InstagramIcon} alt="인스타그램" />
        </a>
      </ImageContainer>
      <MoreButton src={DownArrow} alt="더 알아보기" onClick={scrollToProfile} />
    </Section>
  );
}

export default IntroduceSection;
