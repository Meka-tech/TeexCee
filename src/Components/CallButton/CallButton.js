import React from "react";
import { ReactComponent as CallButtonIcon } from "../../Images/CallButton.svg";
import { ReactComponent as CallIconElement } from "../../Images/CallIcon.svg";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const CallButton = () => {
  return (
    <Container style={{ transform: "scale(1.2)" }}>
      <a href="tel:+2348072002997">
        <CallButtonIcon />
      </a>
    </Container>
  );
};
export const CallIcon = ({ scale }) => {
  return (
    <Container scale={scale}>
      <a href="tel:+2348072002997">
        <CallIconElement />
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;
  transform: ${(props) => (props.scale ? `scale(${props.scale})` : null)};
  display: none;
  ${mobile({ display: "block" })}
`;
