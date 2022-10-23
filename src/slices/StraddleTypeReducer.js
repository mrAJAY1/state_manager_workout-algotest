import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  StrikeParameter: {
    Multiplier: 0.5,
    Adjustment: "Plus",
  },
};
const StraddleTypeSlice = createSlice({
  name: "StraddleTypeEntry",
  initialState,
  reducers: {
    updateMultiplier: (state, { payload }) => {
      state.StrikeParameter.Multiplier = payload;
    },
    updateAdjustment: (state, { payload }) => {
      state.StrikeParameter.Adjustment = payload;
    },
  },
});

export const { updateAdjustment, updateMultiplier } = StraddleTypeSlice.actions;
export default StraddleTypeSlice.reducer;
