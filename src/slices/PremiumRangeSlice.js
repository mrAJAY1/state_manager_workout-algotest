import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  StrikeParameter: {
    Lower: 50,
    Upper: 200,
  },
};
const PremiumRangeSlice = createSlice({
  name: "premiumRangeEntry",
  initialState,
  reducers: {
    updateLower: (state, { payload }) => {
      state.StrikeParameter.Lower = payload;
    },
    updateUpper: (state, { payload }) => {
      state.StrikeParameter.Upper = payload;
    },
  },
});

export const { updateLower, updateUpper } = PremiumRangeSlice.actions;
export default PremiumRangeSlice.reducer;
