import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  PositionType: "Sell",
  Lots: 1,

  LegTrailSL: {
    Type: "none",
    Value: {
      InstrumentMove: null,
      StopLossMove: null,
    },
  },
  LegMomentum: {
    Type: "none",
    Value: null,
  },
  ExpiryKind: "Weekly",
  EntryType: "EntryByStrikeType",
  StrikeParameter: "ATM",
  InstrumentKind: "LegType.CE",
  OptionType: "Call",
};
const LegBuilderSlice = createSlice({
  initialState,
  name: "LegBuilderForm",
  reducers: {
    updatePositionType: (state, { payload }) => {
      state.PositionType = payload;
    },
    updateLot: (state, { payload }) => {
      state.Lots = payload;
    },
    updateOptionType: (state, { payload }) => {
      state.OptionType = payload;
    },
    updateExpiryKind: (state, { payload }) => {
      state.ExpiryKind = payload;
    },
    updateEntryType: (state, { payload }) => {
      state.EntryType = payload;
    },
    setFormDefault: (state) => {
      state = initialState;
    },
    updateStrikeTypeParam: (state, { payload }) => {
      state.StrikeParameter = payload.StrikeParameter;
    },
  },
});

export const {
  updateLot,
  updateEntryType,
  updateExpiryKind,
  updateOptionType,
  updatePositionType,
  setFormDefault,
  updateStrikeTypeParam,
} = LegBuilderSlice.actions;

export default LegBuilderSlice.reducer;
