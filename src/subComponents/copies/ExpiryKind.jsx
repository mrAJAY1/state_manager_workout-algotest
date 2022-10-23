import styled from "styled-components";

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

const ExpiryKind = () => {
  return (
    <SelectContainer>
      <label htmlFor="">Expiry</label>
      <select name="ExpiryKind" value={ExpiryKind} className="selectInput">
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
    </SelectContainer>
  );
};

export default ExpiryKind;
