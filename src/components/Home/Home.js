import React from "react";
import Section from "./Section";
import { Container } from "./Home.styled";

function Home() {
  return (
    <Container>
      <Section
        title={"Model S"}
        desc={"Order Online for Touchless Delivery"}
        leftBtn={"CUSTOM ORDER"}
        rightBtn={"EXISTING INVENTORY"}
        backgroundImg={"model-s.jpg"}
      />
      <Section
        title={"Model 3"}
        desc={"Order Online for Touchless Delivery"}
        leftBtn={"CUSTOM ORDER"}
        rightBtn={"EXISTING INVENTORY"}
        backgroundImg={"model-3.jpg"}
      />
      <Section
        title={"Model Y"}
        desc={"Order Online for Touchless Delivery"}
        leftBtn={"CUSTOM ORDER"}
        rightBtn={"EXISTING INVENTORY"}
        backgroundImg={"model-y.jpg"}
      />
      <Section
        title={"Model X"}
        desc={"Order Online for Touchless Delivery"}
        leftBtn={"CUSTOM ORDER"}
        rightBtn={"EXISTING INVENTORY"}
        backgroundImg={"model-x.jpg"}
      />
      <Section
        title={"Solar Panels"}
        desc={"Lowest Cost Solar Panels in America"}
        leftBtn={"ORDER NOW"}
        rightBtn={"LEARN MORE"}
        backgroundImg={"solar-panel.jpg"}
      />
      <Section
        title={"Solar Roof"}
        desc={"Produce Clean Energy From Your Roof"}
        leftBtn={"ORDER NOW"}
        rightBtn={"LEARN MORE"}
        backgroundImg={"solar-roof.jpg"}
      />
      <Section
        title={"Accessories"}
        desc={""}
        leftBtn={"SHOP NOW"}
        rightBtn={""}
        backgroundImg={"accessories.jpg"}
      />
    </Container>
  );
}

export default Home;
