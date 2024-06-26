import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import DaraDara from "../assets/icons/DaraDaraV.jpeg";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 0.5rem;
  }
`;

const NameSection = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: 3rem;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-right: 10px;
  border-radius: 50%;

  @media (max-width: 600px) {
    height: 30px;
  }
`;

const MyName = styled.div`
  margin-left: 10px;
  font-size: 16px;
  margin-bottom: 5px;
  font-family: Pretendard;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const NavItems = styled.div`
  display: flex;
  margin-right: 3rem;

  @media (max-width: 900px) {
    margin-right: 0;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

interface NavItemProps {
  hoverColor?: string;
}


const NavItem = styled.div<NavItemProps>`
  margin-left: 10px;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease, font-size 0.3s ease, padding 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "transparent"};
    font-size: 24px;
    padding: 3px 20px;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    padding: 8px 0;

    &:hover {
      font-size: 20px;
      padding: 5px 10px;
    }
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px 0;

    &:hover {
      font-size: 18px;
      padding: 4px 8px;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NameSection>
        <Link to="introduce" smooth={true} duration={500}>
          <Logo src={DaraDara} alt="DaraDara Logo" />
        </Link>

        <MyName>
          <Link to="introduce" smooth={true} duration={500}>
            Ryu Jiye
          </Link>
        </MyName>
      </NameSection>

      <NavItems>
        <NavItem hoverColor="#FFB600">
          <Link to="intorduce" smooth={true} duration={500}>
            Home
          </Link>
        </NavItem>

        <NavItem hoverColor="#FFB600">
          <Link to="profile" smooth={true} duration={500}>
            Aboout
          </Link>
        </NavItem>

        <NavItem hoverColor="#FF8500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </NavItem>

        <NavItem hoverColor="#FF5400">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </NavItem>

        <NavItem hoverColor="#D00000">
          <Link to="others" smooth={true} duration={500}>
            Others
          </Link>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
}

export default Navbar;
