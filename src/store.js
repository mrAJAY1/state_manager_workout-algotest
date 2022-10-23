import { configureStore } from "@reduxjs/toolkit";
import LegBuilderReducer from "./slices/LegBuilderSlice";
import PremiumEntryReducer from "./slices/PremiumEntrySlice";
import PremiumRangeReducer from "./slices/PremiumRangeSlice";
import StraddleTypeReducer from "./slices/StraddleTypeReducer";
import StrikeTypeReducer from "./slices/StrikeTypeReducer";
import NewLegComponentSlice from "./slices/NewLegComponentSlice";
import UploadedLegsReducer from "./slices/UploadedLegs";

const store = configureStore({
  reducer: {
    PremiumEntry: PremiumEntryReducer,
    PremiumRange: PremiumRangeReducer,
    StraddleType: StraddleTypeReducer,
    StrikeType: StrikeTypeReducer,
    LegBuilder: LegBuilderReducer,
    NewLeg: NewLegComponentSlice,
    Uploaded: UploadedLegsReducer,
  },
});

export default store;
