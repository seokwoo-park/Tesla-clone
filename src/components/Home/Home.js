import React from "react";
import Section from "./Section";
import { Container } from "./Home.styled";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

function Home() {
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      {cars &&
        cars.map((car, index) => (
          <Section
            key={index}
            title={car.title}
            desc={car.description}
            leftBtn={"CUSTOM ORDER"}
            rightBtn={"EXISTING INVENTORY"}
            backgroundImg={car.image}
          />
        ))}
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
