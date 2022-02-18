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

function Section({ title, desc, leftBtn, rightBtn, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{desc}</p>
      </ItemText>

      <ButtonContainer>
        <ButtonGroup>
          <LeftButton>{leftBtn}</LeftButton>
          {rightBtn && <RightButton>{rightBtn}</RightButton>}
        </ButtonGroup>

        <DownArrow src={DownArrowPath} />
      </ButtonContainer>
    </Wrap>
  );
}

export default Section;
