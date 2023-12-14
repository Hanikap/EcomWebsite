import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slicer/productSlice";
import globalSlice from "./Slicer/globalSlice";

const store = configureStore({

  reducer: {
    Product: productSlice,
    search: globalSlice,
    price: globalSlice,
  }
})
export default store
