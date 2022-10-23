import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateLot } from "../slices/LegBuilderSlice";
import store from "../store";
import EntryByPremium from "../subComponents/EntryByPremium";
import EntryByPremiumRange from "../subComponents/EntryByPremiumRange";
import EntryByStraddleType from "../subComponents/EntryByStraddleType";
import EntryByStrikeType from "../subComponents/EntryByStrikeType";
import ExpiryMain from "../subComponents/ExpiryMain";
import LotMain from "../subComponents/LotMain";
import OptionTypeMain from "../subComponents/OptionTypeMain";
import PositionMain from "../subComponents/PositionMain.jsx";
import StrikeCriteriaMain from "../subComponents/StrikeCriteriaMain";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 46px;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 32px;
  gap: 1.25rem;
  label {
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    color: ${(p) => p.theme.textLead};
    margin-right: 8px;
    margin-bottom: 8px;
    width: -webkit-max-content;
    width: max-content;
  }
  .selectInput {
    appearance: none;
    background: #fff;
    border: 1px solid #f6f6f6;
    border-radius: 17.5px;
    padding: 5px 32px 5px 13px;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 14px;
  }
`;

const LegBuilderForm = ({ futureToggle }) => {
  const { PositionType, ExpiryKind, EntryType, OptionType, Lots } = useSelector(
    (store) => store.LegBuilder
  );
  return (
    <Container>
      <LotMain Lots={Lots} />
      <PositionMain PositionType={PositionType} />
      {!futureToggle && (
        <>
          <OptionTypeMain OptionType={OptionType} />
          <ExpiryMain ExpiryKind={ExpiryKind} />
          <StrikeCriteriaMain EntryType={EntryType} />

          {EntryType === "EntryByPremium" ? (
            <EntryByPremium />
          ) : EntryType === "EntryByPremiumRange" ? (
            <EntryByPremiumRange />
          ) : EntryType === "EntryByStrikeType" ? (
            <EntryByStrikeType />
          ) : EntryType === "EntryByStraddlePrice" ? (
            <EntryByStraddleType />
          ) : (
            <></>
          )}
        </>
      )}
    </Container>
  );
};

export default LegBuilderForm;
