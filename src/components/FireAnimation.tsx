import React from 'react';
import styled, { keyframes } from 'styled-components';

const fireColor = 'rgb(255,80,0)';
const fireColorT = 'rgba(255,80,0,0)';
const dur = '1s';
const blur = '0.02em';
const partSize = '5em';
const parts = 50;

interface ParticleProps {
  p: number;
}

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(0) scale(1);
  }
  25% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-10em) scale(0);
  }
`;
const Fire = styled.div`
  font-size: 22px;
  filter: blur(${blur});
  margin: 0.8em auto 0 auto;
  position: relative;
  width: 10em;
  height: 12em;

  @media (max-width: 1200px) {
    width: 8em;
    height: 10em;
  }

  @media (max-width: 900px) {
    width: 6em;
    height: 8em;
  }

  @media (max-width: 600px) {
    width: 4em;
    height: 6em;
  }
`;

const Particle = styled.div<ParticleProps>`
  animation: ${rise} 1s ease-in infinite;
  background-image: radial-gradient(${fireColor} 20%, ${fireColorT} 70%);
  border-radius: 50%;
  mix-blend-mode: screen;
  opacity: 0;
  position: absolute;
  bottom: 0;
  width: 6em;
  height: 6em;
  animation-delay: ${props => props.p * Math.random()}s;
  left: ${props => `calc(50% - 2.5em + (100% - 5em) * ${(props.p - 1) / 50 - 0.5})`};

  @media (max-width: 1200px) {
    width: 5em;
    height: 5em;
  }

  @media (max-width: 900px) {
    width: 4em;
    height: 4em;
  }

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
  }
`;


const FireAnimation: React.FC = () => {
  return (
    <Fire>
      {Array.from({ length: parts }).map((_, index) => (
        <Particle key={index} p={index + 1} />
      ))}
    </Fire>
  );
};

export default FireAnimation;
