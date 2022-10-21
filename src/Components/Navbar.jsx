import React from "react";
import styled from "styled-components";
import { ReactComponent as NavbarLogo } from "../Images/TCLogoNavbar.svg";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
const Container = styled.div`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const LogoDiv = styled.div`
  margin: 0px 25px;
  flex: 0;
  cursor: pointer;
  transform: scale(0.75);
  display: flex;
  justify-content: center;
`;
const NavItems = styled.ul`
  margin: 0px 100px;
  display: flex;
  justify-content: space-between;
  flex: 0.5;
  height: 100%;
`;
const NavItem = styled.li`
  margin-top: 10px;
  list-style-type: none;
  text-transform: uppercase;
  margin: 0;
  padding: 0 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active === props.item ? " rgba(240, 67, 67, 1)" : null};
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) =>
    props.active === props.item ? "10px solid rgba(38, 50, 56, 1)" : null};
  color: ${(props) => (props.active === props.item ? "white" : null)};
`;

const Navbar = ({ active }) => {
  return (
    <Container>
      <LogoDiv>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <NavbarLogo />
        </Link>
      </LogoDiv>
      <NavItems>
        <NavItem active={active} item="Home">
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </NavItem>

        <NavItem active={active} item="About us">
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About us
          </Link>
        </NavItem>
        <NavItem active={active} item="Contact us">
          <Link
            to="/contact-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact us
          </Link>
        </NavItem>
        <NavItem active={active} item="Contact us">
          <a
            href="https://forms.gle/998DekkjcNtgpcsd8"
            target={"_blank"}
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            Sign up
          </a>
        </NavItem>
      </NavItems>
    </Container>
  );
};

export default Navbar;
