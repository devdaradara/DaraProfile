import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LinkIcon from "../assets/icons/link.webp";
import { BusinessCard } from "../components/BusinessCard";

import UserIcon from "../assets/icons/user.webp";
import GithubIcon from "../assets/icons/github.webp";
import RankingIcon from "../assets/icons/ranking.webp";
import TistoryIcon from "../assets/icons/tistory.webp";
import EmailIcon from "../assets/icons/email.webp";
import CodeIcon from "../assets/icons/code.webp";

const Section = styled.div`
  padding-top: 85px;
  margin-top: -100px;
  margin-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    padding-top: 70px;
    margin-top: -80px;
    margin-bottom: 150px;
  }

  @media (max-width: 900px) {
    padding-top: 50px;
    margin-top: -60px;
    margin-bottom: 120px;
  }

  @media (max-width: 600px) {
    padding-top: 30px;
    margin-top: -40px;
    margin-bottom: 90px;
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

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const BusinessCardContainer = styled.div`
  margin-right: 50px;
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileDescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 500px;
`;

const ProfileDescription = styled.div`
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 22px;
  color: #333;
  text-align: left;
  margin-bottom: 20px;

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

const ProfileIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;

  @media (max-width: 1200px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 900px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
  }
`;

function ProfileSection() {
  const [cardState, setCardState] = useState({
    x: 0,
    y: 0,
    xDeg: 0.0,
    yDeg: 0.0,
    isReverse: false,
  });

  const onMouseMove = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = e;

    const x = clientX - left;
    const y = clientY - top;

    const xDeg = Math.round(-25 + (50 / height) * y);
    const yDeg = Math.round(20 - (40 / width) * x);
    setCardState({ ...cardState, xDeg, yDeg, x, y });
  };

  const onMouseOut = () => {
    setCardState({ ...cardState, xDeg: 0.0, yDeg: 0.0 });
  };

  const reverseBusinessCard = () => {
    setCardState({ ...cardState, isReverse: !cardState.isReverse });
  };

  return (
    <Section id="profile">
      <Link to="profile" smooth={true} duration={500}>
        <TitleContainer>
          <TitleLink src={LinkIcon} alt="LinkIcon" />
          <TitleText>Profile</TitleText>
        </TitleContainer>
      </Link>

      <ContentContainer>
        <BusinessCardContainer>
          <BusinessCard
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            cardState={cardState}
          />
        </BusinessCardContainer>

        <ProfileDescriptionContainer>
          <ProfileDescription>
            <ProfileIcon src={UserIcon} alt="UserIcon" />
            류지예 (Ryu Jiye)
          </ProfileDescription>
          <ProfileDescription>
            <ProfileIcon src={CodeIcon} alt="CodeIcon" />
            React, Spring Boot, Swift
          </ProfileDescription>
          <ProfileDescription>
            <ProfileIcon src={RankingIcon} alt="RankingIcon" />
            <a
              href="https://solved.ac/profile/jiyesung01"
              style={{ color: "#333" }}
            >
              solved.ac/jiyesung01
            </a>
          </ProfileDescription>
          <ProfileDescription>
            <ProfileIcon src={EmailIcon} alt="EmailIcon" />
            <a href="mailto:devdaradara@gmail.com" style={{ color: "#333" }}>
              devdaradara@gmail.com
            </a>
          </ProfileDescription>
          <ProfileDescription>
            <ProfileIcon src={GithubIcon} alt="GithubIcon" />
            <a
              href="https://github.com/devdaradara"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#333" }}
            >
              github.com/devdaradara
            </a>
          </ProfileDescription>
          <ProfileDescription>
            <ProfileIcon src={TistoryIcon} alt="TistoryIcon" />
            <a
              href="https://daradarav.tistory.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#333" }}
            >
              daradarav.tistory.com
            </a>
          </ProfileDescription>
        </ProfileDescriptionContainer>
      </ContentContainer>
    </Section>
  );
}

export default ProfileSection;
