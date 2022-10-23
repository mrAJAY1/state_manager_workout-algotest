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

const Strike = ({values}) => {
  return (
    <SelectContainer>
      <label htmlFor="">Select Strike Criteria</label>
      <select disabled name="EntryType" value={values} className="selectInput">
        <option value="EntryByStrikeType">Strike Type</option>
        <option value="EntryByPremiumRange">Premium Range</option>
        <option value="EntryByPremium">Closest Premium</option>
        <option value="EntryByStraddlePrice">Straddle Width</option>
      </select>
    </SelectContainer>
  );
};

export default Strike;
