import { createSlice } from "@reduxjs/toolkit";
import carInfo from "../../assets/data/carInfo.json";

const initialState = {
  cars: [...carInfo],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
