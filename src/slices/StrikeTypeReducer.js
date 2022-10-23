import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  StrikeParameter: "ATM",
};
const StrikeTypeSlice = createSlice({
  name: "StrikeTypeEntry",
  initialState,
  reducers: {
    updateStrikeType: (state, { payload }) => {
      state.StrikeParameter = payload;
    },
  },
});

export const { updateStrikeType } = StrikeTypeSlice.actions;
export default StrikeTypeSlice.reducer;
