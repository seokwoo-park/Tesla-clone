import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../features/car/carSlice";
import { useParams } from "react-router-dom";
import {
  DetailBtn,
  DetailText,
  StyledDetail,
  TextWrapper,
} from "./Detail.style";

function Detail() {
  let params = useParams();
  const cars = useSelector(selectCars);
  const [currentCar, setCurrentCar] = useState({});

  console.log(currentCar);

  useEffect(
    () =>
      setCurrentCar(
        ...cars.filter(
          (item) => item.title.toLowerCase().replace(" ", "") === params.car
        )
      ),
    [params]
  );

  return (
    <StyledDetail bgImage={currentCar.image}>
      <h2>{currentCar.title}</h2>
      <DetailText>
        <TextWrapper>
          <h3>{currentCar.range} mi</h3>
          <p>Range (EPA est.)</p>
        </TextWrapper>
        <TextWrapper>
          <h3>{currentCar.time} s</h3>
          <p>0-60 mph*</p>
        </TextWrapper>
        <TextWrapper>
          <h3>{currentCar.topSpeed} mph</h3>
          <p>Top Speed*</p>
        </TextWrapper>
        <TextWrapper>
          <h3>{currentCar.peakPower} hp</h3>
          <p>Peak Power</p>
        </TextWrapper>
        <DetailBtn> ORDER NOW </DetailBtn>
      </DetailText>
    </StyledDetail>
  );
}

export default Detail;
