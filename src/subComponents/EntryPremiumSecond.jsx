import { useEffect, useState } from "react";
import styled from "styled-components";
import { updateStikeParameter } from "../slices/NewLegComponentSlice";

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
  margin-right: 8px;
  label {
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    color: ${(p) => p.theme.textDefault};
    margin-right: 8px;
    width: max-content;
  }
`;
const NumberInput = styled.div`
  width: 81px;
  height: 26px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.textSecondary};
    border: 1px solid ${(p) => p.theme.bluredBorder};
    border-radius: 17.5px;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    padding: 6px 32px 6px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .numberIncrement {
    margin: 0 !important;
    position: absolute;
    top: 7px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
  }
  .numberDecrement {
    margin: 0 !important;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
  }
`;

const EntryPremiumSecond = ({ StrikeParameter, index, dispatch }) => {
  const [value, setValue] = useState(StrikeParameter);
  useEffect(() => {
    if (!value || typeof value !== "number") {
      setValue(0);
    }
  }, []);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value > 0) setValue(value - 1);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  useEffect(() => {
    dispatch(updateStikeParameter({ value: parseInt(value), index }));
  }, [value]);
  return (
    <NumberContainer>
      <label htmlFor="">Premium</label>
      <NumberInput>
        <input value={value} onChange={handleChange} type="number" min={0} />
        <svg
          class="numberIncrement"
          onClick={increment}
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99433 3.80399e-05C3.89999 0.00145665 3.80992 0.0397567 3.74325 0.106427L0.111835 3.73784C0.0167939 3.82863 -0.0215061 3.96409 0.011829 4.09176C0.0451643 4.21872 0.144461 4.31802 0.271418 4.35135C0.399085 4.38469 0.534554 4.34639 0.625339 4.25135L4 0.876684L7.37466 4.25135C7.46545 4.34639 7.60091 4.38469 7.72858 4.35135C7.85554 4.31802 7.95484 4.21872 7.98817 4.09176C8.02151 3.96409 7.98321 3.82863 7.88816 3.73784L4.25675 0.106427C4.18724 0.0369197 4.09291 -0.00138039 3.99433 3.80399e-05Z"
            fill="#C7C7C7"
          ></path>
        </svg>
        <svg
          onClick={decrement}
          class="numberDecrement"
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
            fill="#C7C7C7"
          ></path>
        </svg>
      </NumberInput>
    </NumberContainer>
  );
};

export default EntryPremiumSecond;
