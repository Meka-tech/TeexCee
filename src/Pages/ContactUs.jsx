import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";
import { ReactComponent as FacebookLogo } from "../Images/FacebookLogo.svg";
import { ReactComponent as FacebookButton } from "../Images/FacebookButton.svg";
import { ReactComponent as InstagramLogo } from "../Images/InstagramLogo.svg";
import { ReactComponent as InstagramButton } from "../Images/InstagramButton.svg";
import { ReactComponent as LocationLogo } from "../Images/LocationLogo.svg";
import { ReactComponent as LocationButton } from "../Images/LocationButton.svg";
import { ReactComponent as WhatsappLogo } from "../Images/WhatsappLogo.svg";
import { ReactComponent as WhatsappButton } from "../Images/WhatsappButton.svg";
import { ReactComponent as TwitterLogo } from "../Images/TwitterIcon.svg";
import { ReactComponent as TwitterButton } from "../Images/TwitterButton.svg";
import { ReactComponent as LocationButtonMobile } from "../Images/LocationButtonMobile.svg";
import MobileNavbar from "../Components/MobileNavbar";
import { mobile } from "../responsive";

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
`;
const Logo = styled.div`
  opacity: 0.1;
  position: absolute;
  margin: auto;
`;
const Content = styled.div`
  display: block;
  width: 100%;
  height: 30%;
  z-index: 10;
  ${mobile({ marginTop: "30px", marginBottom: "50px" })}
`;
const Heading = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  ${mobile({ marginLeft: "0" })}
`;
const Header = styled.h1`
  text-decoration: underline;
  font-weight: 600;
  font-size: 30px;
`;
const TextContent = styled.p`
  text-align: center;
  font-size: 24px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  ${mobile({
    fontSize: "20px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "80%"
  })}
`;
const Aside = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  z-index: 10;
  height: 80%;
  width: 100%;
  justify-items: center;
  ${mobile({ display: "none" })}
`;
const AsideM = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
  height: 80%;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  ${mobile({ marginBottom: "100px", display: "flex" })}
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
    height: "200px",
    margin: "0",
    marginBottom: "0",
    boxShadow: "none",
    borderBottom: "2px dashed gray",
    borderRadius: "0"
  })}
`;
const AboutDivV = styled.div`
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
    height: "200px",
    margin: "0",
    marginBottom: "0",
    boxShadow: "none",
    borderRadius: "0"
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
  ${mobile({ width: "95%", marginBottom: "5px" })}
`;
const Button = styled.div`
  cursor: pointer;
  transform: scale(0.7);
`;

const ArrayItem = [
  [
    <FacebookLogo />,
    "Facebook",
    "Reach us on facebook @TeeCeeSupermarket or click the button below.",
    <FacebookButton />,
    "https://www.facebook.com/TeeCeeSupermarket/"
  ],
  [
    <InstagramLogo />,
    "Instagram",
    "Reach us on Instagram @Teeceesupermart or click the button below.",
    <InstagramButton />,
    "https://instagram.com/teeceesupermart?igshid=YmMyMTA2M2Y="
  ],
  [
    <LocationLogo />,
    "Location",
    "We are located at Number 50/58 Chime Avenue, New Haven, Enugu State.",
    <LocationButtonMobile />,
    "https://maps.app.goo.gl/enrsjGAR3rxyQuTNA"
  ],
  [
    <WhatsappLogo />,
    "Whatsapp",
    "Call or reach us on WhatsApp @ 08072002997 or click the button below.",
    <WhatsappButton />,
    "https://wa.me/message/QHH7NMUFHUV2L1"
  ],
  [
    <TwitterLogo />,
    "Twitter",
    "Reach us on Twitter @TeeCeeSuperMart or click the button below.",
    <TwitterButton />,
    "https://twitter.com/TeeCeeSuperMart?t=MozGOwOzWaVC2saqlQWgVA&s=09"
  ]
];
const ArrayItemM = [
  [
    <FacebookLogo />,
    "Facebook",
    "Reach us on facebook @TeeCeeSupermarket or click the button below.",
    <FacebookButton />,
    "https://www.facebook.com/TeeCeeSupermarket/"
  ],
  [
    <InstagramLogo />,
    "Instagram",
    "Reach us on Instagram @Teeceesupermart or click the button below.",
    <InstagramButton />,
    "https://instagram.com/teeceesupermart?igshid=YmMyMTA2M2Y="
  ],

  [
    <WhatsappLogo />,
    "Whatsapp",
    "Call or reach us on WhatsApp @ 08072002997 or click the button below.",
    <WhatsappButton />,
    "https://wa.me/message/QHH7NMUFHUV2L1"
  ],
  [
    <TwitterLogo />,
    "Twitter",
    "Reach us on Twitter @TeeCeeSuperMart or click the button below.",
    <TwitterButton />,
    "https://twitter.com/TeeCeeSuperMart?t=MozGOwOzWaVC2saqlQWgVA&s=09"
  ]
];

const ContactUs = () => {
  return (
    <Container>
      <Navbar active="Contact us" />
      <MobileNavbar active="Contact us" />
      <Body>
        <Logo>
          <TCLogo />
        </Logo>
        <Content>
          <Heading>
            <Header>Get in Touch</Header>
            <TextContent>
              Want to get in touch? We’d love to see or hear from you. Here’s
              how you can reach us...
            </TextContent>
          </Heading>
        </Content>
        <Aside>
          {ArrayItem.map((item, index) => {
            return (
              <AboutDiv key={index}>
                <Icon> {item[0]}</Icon>
                <AboutTitle>{item[1]}</AboutTitle>
                <AboutContent>{item[2]}</AboutContent>
                <a
                  href={item[4]}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button>{item[3]}</Button>
                </a>
              </AboutDiv>
            );
          })}
        </Aside>
        <AsideM>
          {ArrayItemM.map((item, index) => {
            if (ArrayItemM.length !== index + 1) {
              return (
                <AboutDiv key={index}>
                  <Icon> {item[0]}</Icon>
                  <AboutTitle>{item[1]}</AboutTitle>
                  <AboutContent>{item[2]}</AboutContent>
                  <a
                    href={item[4]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button>{item[3]}</Button>
                  </a>
                </AboutDiv>
              );
            }
            if (ArrayItemM.length === index + 1) {
              return (
                <AboutDivV key={index}>
                  <Icon> {item[0]}</Icon>
                  <AboutTitle>{item[1]}</AboutTitle>
                  <AboutContent>{item[2]}</AboutContent>
                  <a
                    href={item[4]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button>{item[3]}</Button>
                  </a>
                </AboutDivV>
              );
            }
          })}
        </AsideM>
      </Body>
    </Container>
  );
};

export default ContactUs;
