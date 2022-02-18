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
import { Fade } from "react-reveal";

function Section({ title, desc, leftBtn, rightBtn, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </ItemText>
      </Fade>

      <ButtonContainer>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src={DownArrowPath} />
      </ButtonContainer>
    </Wrap>
  );
}

export default Section;
