import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import DaraDara from "../assets/icons/DaraDara.png";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFCF51;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NameSection = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: 12rem;
`;

const Logo = styled.img`
  height: 45px;
  margin-right: 10px;
`;

const MyName = styled.div`
  margin-left: 10px;
  font-size: 32px;
  font-family: Pretendard6;
`;

const NavItems = styled.div`
  display: flex;
  margin-right: 12rem;
`;

interface NavItemProps {
  hoverColor?: string;
}

const NavItem = styled.div<NavItemProps>`
  margin-left: 30px;
  font-size: 24px;
  font-family: Pretendard6;
  cursor: pointer;
  padding: 10px 15px;
  transition: color 0.3s ease, font-size 0.3s ease, padding 0.3s ease; 

  &:hover {
    color: ${props => props.hoverColor || "transparent"};
    font-size: 30px;
    padding: 3px 20px;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NameSection>
        <Link to="profile" smooth={true} duration={500}>
          <Logo src={DaraDara} alt="DaraDara Logo" />
        </Link>

        <MyName>
          <Link to="profile" smooth={true} duration={500}>
            RyuJiye
          </Link>
        </MyName>
      </NameSection>

      <NavItems>
        <NavItem hoverColor="#FF8500">
          <Link to="profile" smooth={true} duration={500}>
            DaraDara
          </Link>
        </NavItem>
        <NavItem hoverColor="#FF6D00">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </NavItem>
        <NavItem hoverColor="#FF5400">
          <Link to="archiving" smooth={true} duration={500}>
            Archiving
          </Link>
        </NavItem>
        <NavItem hoverColor="#FF4800">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </NavItem>
        <NavItem hoverColor="#DC2F02">
          <Link to="awards" smooth={true} duration={500}>
            Awards
          </Link>
        </NavItem>
        <NavItem hoverColor="#D00000">
          <Link to="others" smooth={true} duration={500}>
            Others
          </Link>
        </NavItem>
        <NavItem hoverColor="#9D0208">
          <Link to="board" smooth={true} duration={500}>
            Board
          </Link>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
}

export default Navbar;