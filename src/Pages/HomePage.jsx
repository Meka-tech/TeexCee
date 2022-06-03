import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { ReactComponent as TCLogo } from "../Images/TClogo.svg";
import { ReactComponent as Amico } from "../Images/amico.svg";
import { mobile } from "../responsive";
import MobileNavbar from "../Components/MobileNavbar";

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
  ${mobile({ height: "100vh", marginTop: "30px" })}
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
const TextContent = styled.p`
  text-align: left;
  ${mobile({ fontSize: "20px" })}
`;
const Aside = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65vh;
  width: 100%;
  ${mobile({ height: "80vh", justifyContent: "center", width: "90%" })}
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
  ${mobile({ marginLeft: "0" })}
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
];
const HomePage = () => {
  return (
    <Container>
      <Navbar active="Home" />

      <MobileNavbar active="Home" />

      <Body>
        <Logo>
          <TCLogo />
        </Logo>
        <Content>
          <Heading>
            <Header>Quality Products at the best price</Header>
            <TextContent>
              At TEE CEE supermarket we provide our customers with a wide
              variety of quality products listed below at the best prices so why
              don’t you visit our store and see what alluring really means.
            </TextContent>
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
          <WorkSpaceSvg>
            <Amico />
          </WorkSpaceSvg>
        </Aside>
      </Body>
    </Container>
  );
};

export default HomePage;
