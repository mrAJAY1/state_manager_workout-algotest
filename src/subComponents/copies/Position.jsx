import React from "react";
import styled from "styled-components";
const SelectContainer = styled.div`
  pointer-events: none;
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
const Position = ({ values }) => {
  return (
    <SelectContainer>
      <label htmlFor="">Position</label>
      <select
        name="PositionType"
        disabled
        className="selectInput"
        value={values}
      >
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>
    </SelectContainer>
  );
};

export default Position;
