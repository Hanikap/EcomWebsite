import React from 'react';
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from 'react-redux';
import { setPriceRange } from '../Slicer/globalSlice';

const PriceSlider = () => {
  const priceRange = useSelector(state => state.price.priceRange);
  const dispatch = useDispatch();

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceRange(newValue));
  };

  return (
    <div style={{ width: "10rem", padding: "15px" }}>
      <Slider value={priceRange} onChange={handlePriceChange} valueLabelDisplay="auto" max={300} />
      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
    </div>
  );
}

export default PriceSlider;
