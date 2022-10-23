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
const ByStrike = ({ values }) => {
  return (
    <SelectContainer>
      <label htmlFor="">Strike Type</label>
      <span>
        <select disabled name="StrikeParameter" value={values} className="selectInput">
          <option value="ATM">ATM</option>
          <option value="OTM1">OTM1</option>
        </select>
        <span className="downIcon"></span>
      </span>
    </SelectContainer>
  );
};

export default ByStrike;
