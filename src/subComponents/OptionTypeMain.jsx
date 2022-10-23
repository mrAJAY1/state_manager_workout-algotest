import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateOptionType } from "../slices/LegBuilderSlice";

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

const OptionTypeMain = ({ OptionType }) => {
  const dispatch = useDispatch();
  return (
    <SelectContainer>
      <label htmlFor="">Option Type</label>
      <select
        name="OptionType"
        onChange={(e) => dispatch(updateOptionType(e.target.value))}
        value={OptionType}
        className="selectInput"
      >
        <option value="LegType.CE">Call</option>
        <option value="LegType.PE">Put</option>
      </select>
    </SelectContainer>
  );
};

export default OptionTypeMain;
