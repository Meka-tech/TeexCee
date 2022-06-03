import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";
import { ReactComponent as Bag } from "../Images/Bag.svg";
import { ReactComponent as NairaSign } from "../Images/NairaSign.svg";
import { ReactComponent as AlarmClock } from "../Images/AlarmClock.svg";
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
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: white;
  ${mobile({ height: "110vh" })}
`;
const Logo = styled.div`
  opacity: 0.1;
  position: absolute;
  margin: auto;
`;
const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const Heading = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  ${mobile({ marginTop: "100px" })}
`;
const Header = styled.h1`
  text-decoration: underline;
  font-weight: 400;
  font-family: "Dancing Script", cursive;
  font-size: 25px;
`;
const TextContent = styled.p`
  text-align: center;
  font-size: 24px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  ${mobile({ fontSize: "18px" })}
`;
const Aside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 60vh;
  ${mobile({ display: "none" })}
`;
const AboutDiv = styled.div``;
const Icon = styled.div`
  transform: scale(0.8);
`;
const AboutTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;
const AboutContent = styled.p`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 200;
`;
const AsideM = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 60vh;
  width: 80%;
  background-color: rgba(38, 50, 56, 1);
  ${mobile({ display: "flex" })}
  margin-bottom: 40px;
`;
const AboutDivM = styled.div`
  background-color: "red";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px dashed white;
  height: 200px;
`;
const AboutHeaderM = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 35px;
`;
const IconM = styled.div`
  transform: scale(0.8);
`;
const AboutTitleM = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;
const AboutContentM = styled.p`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 200;
`;

const ArrayItem = [
  [
    <Bag />,
    "Quality Products",
    "We work with the best suppliers to offer our customers the best products of the highest quality",
  ],
  [
    <NairaSign />,
    "Affordable Prices",
    "Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need.",
  ],
  [
    <AlarmClock />,
    "Opening Hours",
    "We are ready to serve you Monday - Saturday from 8am - 9pm daily and offer the best selection of products.",
  ],
];

const AboutUs = () => {
  return (
    <Container>
      <Navbar active="About us" />
      <MobileNavbar active="About us" />
      <Body>
        <Logo>
          <TCLogo />
        </Logo>
        <Content>
          <Heading>
            <Header>A few words about our store</Header>
            <TextContent>
              TEE CEE supermarket is a family owned store that has been offering
              quality products for your everyday needs since 2017, while also
              providing personal shopping and Logistics both Home and Abroad for
              our esteemed customers.{" "}
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
              </AboutDiv>
            );
          })}
        </Aside>
        <AsideM>
          {ArrayItem.map((item, index) => {
            return (
              <AboutDivM key={index}>
                <AboutHeaderM>
                  <IconM> {item[0]}</IconM>
                  <AboutTitleM>{item[1]}</AboutTitleM>
                </AboutHeaderM>

                <AboutContentM>{item[2]}</AboutContentM>
              </AboutDivM>
            );
          })}
        </AsideM>
      </Body>
    </Container>
  );
};

export default AboutUs;
