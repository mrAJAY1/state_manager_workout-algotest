import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updatePositionType } from "../slices/LegBuilderSlice";

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
const PositionMain = ({ PositionType }) => {
  const dispatch = useDispatch();
  return (
    <SelectContainer>
      <label htmlFor="">Position</label>
      <select
        name="PositionType"
        onChange={(e) => dispatch(updatePositionType(e.target.value))}
        className="selectInput"
        value={PositionType}
      >
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>
    </SelectContainer>
  );
};

export default PositionMain;
