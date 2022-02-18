import React from "react";
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  ButtonContainer,
} from "./Section.styled";

import DownArrowPath from "../../assets/images/down-arrow.svg";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>

      <ButtonContainer>
        <ButtonGroup>
          <LeftButton>CUSTOM ORDER</LeftButton>
          <RightButton>EXISTING INVENTORY</RightButton>
        </ButtonGroup>

        <DownArrow src={DownArrowPath} />
      </ButtonContainer>
    </Wrap>
  );
}

export default Section;
