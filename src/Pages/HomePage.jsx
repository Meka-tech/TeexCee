import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";
import { ReactComponent as Amico } from "../Images/amico.svg";
import { ReactComponent as MobileSvg } from "../Images/MobileSvg.svg";
import { ReactComponent as WhatsappLinkIcon } from "../Images/WhatsappLinkIcon.svg";
import { mobile } from "../responsive";
import MobileNavbar from "../Components/MobileNavbar";
import { CallIcon } from "../Components/CallButton/CallButton";

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
  overflow-x: hidden;
  ${mobile({ height: "100vh", marginTop: "30px" })}
`;
const Logo = styled.div`
  opacity: 0.1;
  position: absolute;
  margin: auto;
`;
const Content = styled.div`
  display: block;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 60px;
  height: fit-content;
  z-index: 10;
  ${mobile({ height: "fit-content", marginBottom: "10px" })}
`;
const Heading = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 60%;
  ${mobile({ width: "90%" })}
`;
const Header = styled.h1`
  text-decoration: underline;
  font-weight: 400;
  text-align: left;
  font-size: 30px;
`;
const TextContent = styled.p`
  text-align: left;
  line-height: 50px;
  font-size: 25px;
  ${mobile({ fontSize: "20px" })}
`;
const Aside = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  ${mobile({
    height: "350px",
    width: "85%",
    paddingBottom: "20px",
    flexDirection: "column",
    display: "block",
    marginTop: "20px"
  })};
`;
const ProductsDiv = styled.div`
  width: 360px;
  height: 450px;
  background-color: rgba(38, 50, 56, 1);
  margin-left: 30px;
  box-shadow: 0px 4px 5px 3px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  ${mobile({ display: "none" })}
`;
const ProductHeading = styled.h1`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
`;
const ProductList = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  text-align: left;
`;
const ProductListItem = styled.li`
  margin-bottom: 8px;
`;
const WorkSpaceSvg = styled.div`
  transform: scale(0.8);
  margin-right: 30px;
  ${mobile({ display: "none" })}
`;
const WorkSpaceSvgMobile = styled.div`
  margin-right: 30px;
  display: none;

  ${mobile({
    display: "block",
    margin: "0",
    position: "absolute",
    bottom: "0",
    left: "0"
  })}
`;
const WhatsappLinkM = styled.div`
  display: none;
  ${mobile({ display: "flex" })}
  transform: ${(props) => (props.visible ? "scale(1.3)" : "scale(0)")};
  transition: all 0.3s ease-in-out;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const WhatsappLink = styled.div`
  display: flex;
  ${mobile({ display: "none" })}
  width: 90%;
  justify-content: end;
  margin-top: -20px;
  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
  transition: all 0.3s ease-in-out;
`;

const ProductItems = [
  "Beverages",
  "Water & Dispensers",
  "Snacks",
  "Bread and Bread spreads",
  "Liqour, Wine & Rum",
  "Baby food & Baby care products",
  "Canned goods & Cereals",
  "Cigarettes & Tobacco products",
  "Shisha Flavours & Smoke Accessories",
  "Bulk Dried Foods (Rice , Flour etc)",
  "Confections & Candles",
  "Cosmetics",
  "Dairy Products & Eggs",
  "House-cleaning products",
  "Housewares & Dishwares",
  "Frozen Foods & Snacks",
  "Agbada, Garments & other apparels",
  "Home , Outdoor Flowers & Vases",
  "Etc"
];
const HomePage = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, [visible]);
  return (
    <Container>
      <Navbar active="Home" />

      <MobileNavbar active="Home" />

      <Body>
        <Logo>
          <TCLogo />
        </Logo>
        <div style={{ justifyContent: "flex-start", height: "100%" }}>
          <Content>
            <Heading>
              <Header>Quality Products at the best price</Header>
              <TextContent>
                At TEE CEE supermarket we provide our customers with a wide
                variety of quality products listed below at the best prices so
                why don’t you visit our store and see what alluring really
                means.
              </TextContent>
            </Heading>
          </Content>
          <Aside>
            <Left>
              <ProductsDiv>
                <ProductHeading>Our Products :</ProductHeading>
                <ProductList>
                  {ProductItems.map((item, index) => {
                    return (
                      <ProductListItem key={index}>{item}</ProductListItem>
                    );
                  })}
                </ProductList>
              </ProductsDiv>
              <KYC>
                <h1>Let’s know you better!</h1>
                <h2>Click the button below and fill the form.</h2>
                <a
                  href="https://forms.gle/998DekkjcNtgpcsd8"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <div>Fill</div>
                </a>
              </KYC>
            </Left>
            <WorkSpaceSvg>
              <Amico />
            </WorkSpaceSvg>
            <WorkSpaceSvgMobile>
              <MobileSvg />
            </WorkSpaceSvgMobile>
            <WhatsappLinkM visible={visible}>
              <CallIcon />
              <a
                href="https://wa.me/message/QHH7NMUFHUV2L1"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  transform: "scale(0.75)",
                  marginBottom: "-10px"
                }}
              >
                <WhatsappLinkIcon />
              </a>
            </WhatsappLinkM>
          </Aside>
          <WhatsappLink visible={visible}>
            <a
              href="https://wa.me/message/QHH7NMUFHUV2L1"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <WhatsappLinkIcon
                visible={visible}
                style={{ transform: "scale(0.9)" }}
              />
            </a>
          </WhatsappLink>
        </div>
      </Body>
    </Container>
  );
};

export default HomePage;

const KYC = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-left: 30px;
  ${mobile({ marginTop: "20px", marginLeft: "0px" })}
  h1 {
    font-size: 26px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
    ${mobile({ fontSize: "18px", marginBottom: "5px" })}
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 20px;
    width: 60%;
    line-height: 25px;
    ${mobile({ fontSize: "14px" })}
  }
  div {
    background-color: rgba(0, 230, 118, 1);
    font-size: 16px;
    padding: 5px 15px;
    color: white;
    font-weight: 400;
    width: fit-content;
    border-radius: 5px;
    ${mobile({ fontSize: "12px" })}
  }
`;
const Left = styled.div``;
