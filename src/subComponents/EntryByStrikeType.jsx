import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateStrikeType } from "../slices/StrikeTypeReducer";

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  span {
    width: fit-content;
    position: relative;
    color: ${(p) => p.theme.textLead};
  }
  .downIcon {
    display: inline-block;
    position: absolute;
    right: 16px;
    top: 6px;
    width: 8px;
    height: 8px;
    border: solid ${(p) => p.theme.textLead};
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    pointer-events: none;
  }
`;
const EntryByStrikeType = () => {
  const { StrikeParameter } = useSelector((store) => store.StrikeType);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(updateStrikeType(value));
  };
  return (
    <SelectContainer>
      <label htmlFor="">Strike Type</label>
      <span>
        <select
          name="StrikeParameter"
          value={StrikeParameter}
          onChange={handleChange}
          className="selectInput"
        >
          <option value="ATM">ATM</option>
          <option value="OTM1">OTM1</option>
        </select>
        <span className="downIcon"></span>
      </span>
    </SelectContainer>
  );
};

export default EntryByStrikeType;
