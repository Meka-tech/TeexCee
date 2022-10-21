import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";

import { mobile } from "../responsive";
import MobileNavbar from "../Components/MobileNavbar";
import { ReactComponent as WhatsappLinkIcon } from "../Images/WhatsappLinkIcon.svg";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  display: none;
  justify-content: space-between;
  ${mobile({ display: "flex" })};
`;
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
  ${mobile({ height: "fit-content", marginTop: "30px", width: "100vw" })}
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
  ${mobile({ height: "40%" })}
`;
const Heading = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  width: 50%;
  ${mobile({ width: "90%" })}
`;
const Header = styled.h1`
  text-decoration: underline;
  font-weight: 400;
  text-align: left;
  font-size: 30px;
`;

const Aside = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65vh;
  width: 100%;
  margin-top: 75px;
  position: relative;

  ${mobile({
    height: "fit-content",
    width: "90%",
    marginBottom: "50px",
    alignItems: "flex-end",
  })}
`;
const ProductsDiv = styled.div`
  width: 360px;
  height: 330px;
  background-color: rgba(38, 50, 56, 1);
  margin-left: 30px;
  box-shadow: 0px 4px 5px 3px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  ${mobile({ marginLeft: "0", height: "fit-content", marginBottom: "25px" })}
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
  font-size: calc(7px + 1.5vw);
`;
const WhatsappLink = styled.div`
  display: none;
  ${mobile({ display: "flex" })}
  margin-top: -50px;
  margin-bottom: 50px;
  width: 100%;
  justify-content: end;
  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
  transition: all 0.3s ease-in-out;
  margin-right: 25px;
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
  "Etc",
];

const Products = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, [visible]);

  return (
    <Container>
      <MobileNavbar active="Products" />

      <Body>
        <Logo>
          <TCLogo />
        </Logo>
        <Content>
          <Heading>
            <Header>Our wide range of products include</Header>
          </Heading>
        </Content>
        <Aside>
          <ProductsDiv>
            <ProductHeading>Our Products :</ProductHeading>
            <ProductList>
              {ProductItems.map((item, index) => {
                return <ProductListItem key={index}>{item}</ProductListItem>;
              })}
            </ProductList>
          </ProductsDiv>
        </Aside>
        <WhatsappLink visible={visible}>
          <a
            href="https://wa.me/message/QHH7NMUFHUV2L1"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <WhatsappLinkIcon style={{ transform: "scale(0.9)" }} />
          </a>
        </WhatsappLink>
      </Body>
    </Container>
  );
};

export default Products;
