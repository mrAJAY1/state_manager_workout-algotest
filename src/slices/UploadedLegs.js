import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const initialState = {
  UploadedLegs: [],
};
export const uploadLegs = createAsyncThunk(
  "UploadedLegs/Legs",
  async (data) => {
    await setDoc(doc(db, "algo_test", "legs_data"), {
      legs: data,
    });
    const response = await getDoc(doc(db, "algo_test", "legs_data"));
    return response.data();
  }
);
export const getData = createAsyncThunk("uploaded/legs", async () => {
  const response = await getDoc(doc(db, "algo_test", "legs_data"));
  return response.data();
});
const asyncSlice = createSlice({
  initialState,
  name: "asyncSlice",
  extraReducers: {
    [uploadLegs.pending]: () => {
      console.log("pending");
    },
    [uploadLegs.fulfilled]: (state, { payload }) => {
      state.UploadedLegs = payload.legs;
      console.log(state.UploadedLegs);
    },
    [uploadLegs.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.UploadedLegs = payload.legs;
    },
    [getData.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});
export default asyncSlice.reducer;
