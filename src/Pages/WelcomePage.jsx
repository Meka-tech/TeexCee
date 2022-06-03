import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";
import { ReactComponent as PayLess } from "../Images/PayLess.svg";
import MobileNavbar from "../Components/MobileNavbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Body = styled.div`
  background-color: rgba(240, 67, 67, 1);
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({ height: "100vh" })}
`;
const Content = styled.div`
  transform: scale(0.7);
  flex: 1;
  ${mobile({ transform: "scale(0.5)" })}
`;
const WelcomeTo = styled.div`
  font-size: 70px;
  color: white;
  font-family: "Dancing Script", cursive;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  margin-bottom: 35px;
  margin-left: 50px;
`;
const Logo = styled.div`
  height: fit-content;
  margin-bottom: 10px;
`;
const TradeMark = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
  ${mobile({ fontSize: "11px", marginBottom: "10px" })}
`;

const WelcomePage = () => {
  return (
    <Container>
      <Navbar />
      <MobileNavbar />
      <Body>
        <Content>
          <WelcomeTo>
            <p style={{ margin: "0" }}>Welcome</p>
            <p style={{ margin: "0" }}>to</p>
          </WelcomeTo>
          <Logo>
            <TCLogo />
          </Logo>
          <PayLess />
        </Content>
        <TradeMark>
          TEE CEE supermarket 2022 © Copyright All rights reserved
        </TradeMark>
      </Body>
    </Container>
  );
};

export default WelcomePage;
