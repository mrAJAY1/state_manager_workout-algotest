import React from "react";
import EntryByPremiumCopy from "./EntryByPremiumCopy";
import ExpiryKind from "./ExpiryKind";
import Lots from "./Lots";
import OptionType from "./OptionType";
import Position from "./Position";
import Strike from "./Strike";
import ByStraddle from "./ByStraddle";
import PremiumRange from "./EntryByPremiumRangeCopy";

const DataDisplay = ({ values, index }) => {
  return (
    <div style={{ display: "block", margin: "50px 0px 35px 0" }}>
      <h3>{index + 1}.</h3> <br />
      <h6>Lots : {values.Lots}</h6>
      <br />
      <h6>Position : {values.PositionType}</h6>
      <br />
      <h6>OptionType : {values.OptionType}</h6>
      <br />
      <h6>ExpiryKind : {values.ExpiryKind}</h6>
      <br />
      <h6>EntryType : {values.EntryType}</h6>
      <br />
      {values.EntryType === "EntryByPremium" ? (
        <h6>Premium : {values.StrikeParameter}</h6>
      ) : values.EntryType === "EntryByPremiumRange" ? (
        <h6>
          Premium Range : &#160; &#160; Lower: &#160; &#160;
          {values.StrikeParameter.Lower} &#160; Upper: &#160; &#160;
          {values.StrikeParameter.Upper}
        </h6>
      ) : values.EntryType === "EntryByStrikeType" ? (
        <h6>Strike : {values.StrikeParameter}</h6>
      ) : values.EntryType === "EntryByStraddlePrice" ? (
        <h6>
          StraddlePrice :
          {`${values.StrikeParameter.Adjustment === "Plus" ? "  " : " - "} ${
            values.StrikeParameter.Multiplier
          }`}
        </h6>
      ) : (
        <></>
      )}
      <br />
      <h6>
        Momentum : &#160;&#160; {values.LegMomentum.Type} &#160;&#160;
        {values.LegMomentum.Value}
      </h6>
      <br />
      <h6>
        Trail SL : &#160;&#160; {values.LegTrailSL.Type} &#160;&#160;
        {values.LegTrailSL.InstrumentMove}&#160;&#160;
        {values.LegTrailSL.StopLossMove}
      </h6>
    </div>
  );
};

export default DataDisplay;
