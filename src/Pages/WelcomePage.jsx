import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";
import { ReactComponent as PayLess } from "../Images/PayLess.svg";
import { ReactComponent as MessgaeUs } from "../Images/MessageUs.svg";
import MobileNavbar from "../Components/MobileNavbar";
import { mobile } from "../responsive";
import { CallButton } from "../Components/CallButton/CallButton";

const Container = styled.div``;
const Body = styled.div`
  background-color: rgba(240, 67, 67, 1);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({ height: "100vh" })}
`;
const Content = styled.div`
  transform: scale(0.8);
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-bottom: 0;
  ${mobile({ transform: "scale(0.6)" })}
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
  ${mobile({ fontSize: "11px", marginBottom: "10px", marginTop: "-100px" })}
`;
const MessageUsDiv = styled.div`
  width: fit-content;
  margin-top: 100px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.visible ? "scale(1.3)" : "scale(0)")};
  ${mobile({
    display: "none",
  })}
`;
const MessageUsDivM = styled.div`
  display: none;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  width: 290px;
  margin-top: 200px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.visible ? "scale(1.5)" : "scale(0)")};
  ${mobile({
    display: "flex",
  })}
  align-items: center;

  div {
    margin-left: 5.8px;
    margin-right: 5px;
  }
`;

const WelcomePage = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, [visible]);

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
          <MessageUsDiv visible={visible}>
            <a
              href="https://wa.me/message/QHH7NMUFHUV2L1"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <MessgaeUs />
            </a>
          </MessageUsDiv>
          <MessageUsDivM visible={visible}>
            <div>
              <CallButton />
            </div>

            <a
              href="https://wa.me/message/QHH7NMUFHUV2L1"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                transform: "scale(0.86)",
              }}
            >
              <MessgaeUs />
            </a>
          </MessageUsDivM>
        </Content>
        <TradeMark>
          TEE CEE supermarket 2022 © Powered by GiddyUp <sup>TM</sup>
        </TradeMark>
      </Body>
    </Container>
  );
};

export default WelcomePage;
