import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  StrikeParameter: 1,
};
const entryByPremium = createSlice({
  name: "premiumEntry",
  initialState,
  reducers: {
    updateParameter: (state, { payload }) => {
      state.StrikeParameter = payload;
    },
  },
});

export const { updateParameter } = entryByPremium.actions;
export default entryByPremium.reducer;
