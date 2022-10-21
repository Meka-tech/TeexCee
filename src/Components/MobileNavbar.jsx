import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ReactComponent as NavbarLogo } from "../Images/TCLogoMobile.svg";
import { ReactComponent as HamburgerIcon } from "../Images/HamburgerIcon.svg";
import { ReactComponent as HomeIcon } from "../Images/HomeIcon.svg";
import { ReactComponent as InfoIcon } from "../Images/InfoIcon.svg";
import { ReactComponent as LocationWhiteIcon } from "../Images/LocationWhiteIcon.svg";
import { ReactComponent as ProductsIcon } from "../Images/ProductsIcon.svg";
import { ReactComponent as MessageIcon } from "../Images/MessageIcon.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: none;
  ${mobile({ display: "flex" })}
  width: 100%;
  background-color: rgba(240, 67, 67, 1);
  height: fit-content;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
`;
const NavComp = styled.div`
  margin: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SideBar = styled.div`
  position: absolute;
  height: 100vh;
  width: 60%;
  background-color: rgba(240, 67, 67, 1);
  box-shadow: ${(props) =>
    props.open ? "0px 4px 4px 5px rgba(0, 0, 0, 0.25)" : null};
  z-index: 200;
  transform: ${(props) => (props.open ? null : "translate(-70vw)")};
  transition: all ease-in-out 0.2s;
  overflow: hidden;
`;
const SideBarLogoDiv = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
  display: flex;
`;

const SideBarItem = styled.li`
  list-style-type: none;
  color: white;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin-bottom: 50px;
  font-weight: 600;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: left;
  text-decoration: none;
  background-color: ${(props) =>
    props.active === props.item ? "rgba(38, 50, 56, 0.5)" : null};
`;
const SideBarItemLogo = styled.div`
  margin: 0px 10px;
`;
const Shade = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #252525;
  opacity: 0.5;
  z-index: 190;
  transform: ${(props) => (props.open ? null : "translate(-110vw)")};
  transition: all ease-in-out 0.18s;
  overflow: hidden;
`;

const SideBarComponent = ({ isSideBarOpen, active }) => {
  return (
    <SideBar open={isSideBarOpen} active={active}>
      <SideBarLogoDiv>
        <Link to="/">
          <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <NavbarLogo />
          </div>
        </Link>
      </SideBarLogoDiv>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <SideBarItem active={active} item="Home">
          <SideBarItemLogo>
            <HomeIcon />
          </SideBarItemLogo>
          Home
        </SideBarItem>
      </Link>
      <Link to="/products" style={{ textDecoration: "none" }}>
        <SideBarItem active={active} item="Products">
          <SideBarItemLogo>
            <ProductsIcon />
          </SideBarItemLogo>
          Products
        </SideBarItem>
      </Link>
      <Link to="/about-us" style={{ textDecoration: "none" }}>
        <SideBarItem active={active} item="About us">
          <SideBarItemLogo>
            <InfoIcon />
          </SideBarItemLogo>
          About Us
        </SideBarItem>
      </Link>
      <Link to="/contact-us" style={{ textDecoration: "none" }}>
        <SideBarItem active={active} item="Contact us">
          <SideBarItemLogo>
            <MessageIcon />
          </SideBarItemLogo>
          Contact Us
        </SideBarItem>
      </Link>
      <Link to="/locate-us" style={{ textDecoration: "none" }}>
        <SideBarItem active={active} item="Locate us">
          <SideBarItemLogo>
            <LocationWhiteIcon />
          </SideBarItemLogo>
          Locate Us
        </SideBarItem>
      </Link>
    </SideBar>
  );
};

const MobileNavbar = ({ active }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const ToggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <Container>
      <NavComp>
        <Link to="/">
          <NavbarLogo />
        </Link>

        <HamburgerIcon
          onClick={() => {
            ToggleSideBar();
          }}
        />
      </NavComp>
      <Shade
        open={isSideBarOpen}
        onClick={() => {
          ToggleSideBar();
        }}
      />
      <SideBarComponent isSideBarOpen={isSideBarOpen} active={active} />
    </Container>
  );
};

export default MobileNavbar;
