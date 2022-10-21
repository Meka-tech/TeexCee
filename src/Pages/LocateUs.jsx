import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";

import { ReactComponent as LocationLogo } from "../Images/LocationLogo.svg";

import { ReactComponent as LocationButtonMobile } from "../Images/LocationButtonMobile.svg";
import MobileNavbar from "../Components/MobileNavbar";
import { mobile } from "../responsive";
import { ReactComponent as WhatsappLinkIcon } from "../Images/WhatsappLinkIcon.svg";
import { CallIcon } from "../Components/CallButton/CallButton";

const Container = styled.div``;
const Body = styled.div`
  background-color: rgba(240, 67, 67, 1);

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: white;
  height: 100vh;
`;
const Logo = styled.div`
  opacity: 0.1;
  position: absolute;
  margin: auto;
`;
const Content = styled.div`
  display: block;
  width: 100%;
  height: 55%;
  z-index: 10;
  ${mobile({ marginTop: "25px" })}
`;
const Heading = styled.div`
  margin-top: 20px;
`;
const Header = styled.h1`
  text-decoration: underline;
  font-weight: 600;
  font-size: 30px;
`;
const TextContent = styled.p`
  text-align: center;
  font-size: 24px;
  width: 90%;

  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  ${mobile({ fontSize: "20px" })}
`;
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  height: 80%;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  height: 20vh;
`;
const AboutDiv = styled.div`
  background-color: rgba(38, 50, 56, 1);
  margin-bottom: 20px;
  width: 300px;
  height: 240px;
  margin: 20px 100px;
  border-radius: 5px;
  box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
    width: "360px",
    height: "215px",
    margin: "0",
    marginBottom: "0",
    boxShadow: "none",
    borderBottom: "2px dashed gray",
    borderRadius: "0",
  })}
`;
const Icon = styled.div``;
const AboutTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0px;
  ${mobile({ display: "none" })}
`;
const AboutContent = styled.p`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 0;
`;
const Button = styled.div`
  cursor: pointer;
  transform: scale(0.7);
`;
const WhatsappLink = styled.div`
  display: none;
  ${mobile({ display: "flex" })}
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: 30px;
  align-items: center;
  justify-content: end;
  transform: ${(props) => (props.visible ? "scale(1.3)" : "scale(0)")};
  transition: all 0.3s ease-in-out;
`;
const LocateUs = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, [visible]);
  return (
    <Container>
      <MobileNavbar active="Locate us" />
      <Body>
        <Logo>
          <TCLogo />
        </Logo>
        <Content>
          <Heading>
            <Header>Pay us a visit</Header>
            <TextContent>
              We are located at Number 50/58 Chime Avenue, New Haven 400102,
              Enugu State.
            </TextContent>
          </Heading>
        </Content>
        <Aside>
          <LocationLogo />
          <TextContent>Tap to view on your map.</TextContent>
          <a
            href="https://maps.app.goo.gl/enrsjGAR3rxyQuTNA"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <LocationButtonMobile />
          </a>
        </Aside>
        <WhatsappLink visible={visible}>
          <CallIcon scale="0.75" />
          <a
            href="https://wa.me/message/QHH7NMUFHUV2L1"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", transform: "scale(0.75)" }}
          >
            <WhatsappLinkIcon
              visible={visible}
              style={{ transform: "scale(0.9)" }}
            />
          </a>
        </WhatsappLink>
      </Body>
    </Container>
  );
};

export default LocateUs;
