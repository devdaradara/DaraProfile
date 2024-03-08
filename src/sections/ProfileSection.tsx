import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { BusinessCard } from "../components/BusinessCard";

import DaraDaraV from "../assets/icons/DaraDaraV.jpeg";
import UserIcon from "../assets/icons/user.png";
import GithubIcon from "../assets/icons/github.png";
import TistoryIcon from "../assets/icons/tistory.png";
import EmailIcon from "../assets/icons/email.png";
import LinkIcon from "../assets/icons/link.png";
import CodeIcon from "../assets/icons/code.png";

const Section = styled.div`
  height: 100vh;
  padding-top: 80px;
  margin-top: -85px;
  margin-bottom: 18px;
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
  font-family: Pretendard6;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfileDescriptionContainer = styled.div`
  width: 100%
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileDescription = styled.div`
  font-family: Pretendard4;
  font-size: 22px;
  color: #333;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const ProfileIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
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
          <TitleLink src={LinkIcon} alt="UserIcon" />
          <TitleText>Profile</TitleText>
        </TitleContainer>
      </Link>

      <ProfileContainer>
        <BusinessCard
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
          cardState={cardState}
        />

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
              https://github.com/devdaradara
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
              https://daradarav.tistory.com/
            </a>
          </ProfileDescription>
        </ProfileDescriptionContainer>
      </ProfileContainer>
    </Section>
  );
}

export default ProfileSection;
