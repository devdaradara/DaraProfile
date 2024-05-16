import styled from "styled-components";
import DaraDaraV from "../assets/icons/DaraDaraV.jpeg";

const BusinessCardStyle = styled.div`
  position: relative;
  transition: transform 150ms;
  user-select: none;
  margin-right: 30px;

  @media (max-width: 900px) {
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    margin-right: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

interface CardState {
  x: number;
  y: number;
  xDeg: number;
  yDeg: number;
  isReverse: boolean;
}

interface BusinessCardProps {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOut: (e: React.MouseEvent<HTMLDivElement>) => void;
  cardState: CardState;
}

export const BusinessCard = ({onMouseMove, onMouseOut, cardState}: BusinessCardProps) => {

  const cardStyle = {
    transform: `perspective(2000px) rotateX(${cardState.xDeg}deg) rotateY(${cardState.yDeg}deg)`
  };

  const mouseEffectStyle = {
    top: cardState.y,
    left: cardState.x
  }

  return (
    <BusinessCardStyle
      style={cardStyle}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}>
      {/* // className={cardState.isReverse && 'reverse'}> */}
      <ProfileImage src={DaraDaraV} alt="DaraDaraV" />
    </BusinessCardStyle>
  )
}