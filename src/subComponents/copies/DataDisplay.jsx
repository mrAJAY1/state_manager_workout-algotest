import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: block;
  margin: 50px 0px 35px 0;
  th {
    margin: 0px 15px 0px 15px;
  }
  td {
    text-align: center;
  }
  tr:not(:first-child) {
    margin-top: 20px;
  }
`;
const DataDisplay = ({ values, index }) => {
  return (
    <Container>
      <table style={{ width: "100%" }}>
        <tr>
          <th>index</th>
          <th>Lots</th>
          <th>Position</th>
          <th>Option</th>
          <th>Expiry Kind</th>
          <th>Entry Type</th>
          <th>
            {values.EntryType === "EntryByPremium"
              ? "Premium"
              : values.EntryType === "EntryByPremiumRange"
              ? "Premium Range"
              : values.EntryType === "EntryByStrikeType"
              ? "Strike"
              : values.EntryType === "EntryByStraddlePrice"
              ? "StraddlePrice"
              : ""}
          </th>
          {values.LegMomentum.Type !== "none" && <th>Momentum</th>}

          {values.LegTrailSL.Type !== "none" && <th>TrailSL</th>}
        </tr>
        <tr>
          <td>{index + 1}.</td>
          <td> {values.Lots}</td>
          <td> {values.PositionType}</td>
          <td> {values.OptionType}</td>
          <td> {values.ExpiryKind}</td>
          <td>{values.EntryType}</td>
          <td>
            {values.EntryType === "EntryByPremium" ? (
              values.StrikeParameter
            ) : values.EntryType === "EntryByPremiumRange" ? (
              (values.StrikeParameter.Lower, values.StrikeParameter.Upper)
            ) : values.EntryType === "EntryByStrikeType" ? (
              values.StrikeParameter
            ) : values.EntryType === "EntryByStraddlePrice" ? (
              (values.StrikeParameter.Adjustment === "Plus" ? "  " : " - ",
              values.StrikeParameter.Multiplier)
            ) : (
              <></>
            )}
          </td>
          {values.LegMomentum.Type !== "none" && (
            <>
              {" "}
              <td>{values.LegMomentum.Type}</td>
              <td>{values.LegMomentum.Value}</td>
            </>
          )}
          {values.LegTrailSL.Type !== "none" && (
            <>
              {" "}
              <td>{values.LegTrailSL.Type}</td>
              <td>{values.LegTrailSL.InstrumentMove}</td>
              <td>{values.LegTrailSL.StopLossMove}</td>
            </>
          )}
        </tr>
      </table>
    </Container>
  );
};

export default DataDisplay;
