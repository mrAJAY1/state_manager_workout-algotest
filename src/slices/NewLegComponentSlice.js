import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Legs: [],
};
const NewLegSlice = createSlice({
  initialState: initialState,
  name: "NewLegSlice",
  reducers: {
    addNewLeg: (state, { payload }) => {
      state.Legs.push(payload);
      console.log(state.Legs);
    },
    deleteLeg: (state, { payload }) => {
      state.Legs.splice(payload, 1);
    },
    updateLots: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].Lots = value;
    },
    updatePositionTypeNew: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].PositionType = value;
    },
    updateOptionTypeNew: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].OptionType = value;
    },
    updateExpiryKind: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].ExpiryKind = value;
    },
    updateEntryType: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].EntryType = value;
    },
    updateStikeParameter: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].StrikeParameter = value;
    },
    updateLegMomentum: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].LegMomentum = value;
    },
    updateLegTrailSL: (state, { payload }) => {
      const { value, index } = payload;
      state.Legs[index].LegTrailSL = value;
    },
    copyLeg: (state, { payload }) => {
      const leg = state.Legs[payload];
      console.log(leg);
      state.Legs.push(leg);
    },
    setDataDefault: (state, { payload }) => {
      state.Legs.length = 0;
    },
  },
});
export const {
  addNewLeg,
  deleteLeg,
  updateExpiryKind,
  updateLots,
  updatePositionTypeNew,
  updateEntryType,
  updateOptionTypeNew,
  updateStikeParameter,
  updateEntryByRange,
  updateLegMomentum,
  updateLegTrailSL,
  setDataDefault,
  copyLeg,
} = NewLegSlice.actions;

export default NewLegSlice.reducer;
