import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { updateStikeParameter } from "../slices/NewLegComponentSlice";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 8px;
  margin-right: 8px;
  .row3 {
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
    color: ${(p) => p.theme.textLead};
    display: inline-flex;
    align-items: center;
    font-weight: 700;
  }
  .row2 {
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
    color: ${(p) => p.theme.textLead};
    display: inline-flex;
    align-items: center;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  span {
    width: fit-content;
    position: relative;
    color: ${(p) => p.theme.textLead};
    select {
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
    .chevron {
      display: inline-block;
      position: absolute;
      right: 16px;
      top: 6px;
      width: 8px;
      height: 8px;
      border: solid #3f3f3f;
      border-width: 0 1px 1px 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      pointer-events: none;
      color: ${(p) => p.theme.textLead};
    }
  }
`;
const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NumberInput = styled.div`
  width: 81px;
  height: 26px;
  position: relative;
  input {
    width: 70px;
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
  .increment {
    margin: 0 !important;
    position: absolute;
    top: 7px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
  }
  .decrement {
    margin: 0 !important;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
  }
`;
const StraddleStrikeSecond = ({ index, dispatch }) => {
  const [values, setValues] = useState({ Adjustment: "Plus", Multiplier: 0.5 });
  const updateAdjustment = (e) => {
    const { value } = e.target;
    setValues({ ...values, Adjustment: value });
  };
  const updateMultiplier = (e) => {
    const { value } = e.target;
    setValues({ ...values, Multiplier: parseInt(value) });
  };
  const incrementMulti = () => {
    const value = values.Multiplier === "" ? -0.5 : values.Multiplier;
    setValues({ ...values, Multiplier: value + 1 });
  };
  const decrementMulti = () => {
    values.Multiplier > 0.5 &&
      setValues({ ...values, Multiplier: values.Multiplier - 1 });
  };
  useEffect(() => {
    values.Multiplier === ""
      ? dispatch(
          updateStikeParameter({
            value: { ...values, Multiplier: 0.5 },
            index,
          })
        )
      : dispatch(
          updateStikeParameter({
            value: values,
            index,
          })
        );
  }, [values]);
  return (
    <Container>
      <label class="row3">[</label>
      <label class="row2">ATM Strike</label>
      <SelectContainer>
        <span>
          <select value={values.Adjustment} onChange={updateAdjustment}>
            <option value="Plus">+</option>
            <option value="Minus">-</option>
          </select>
          <span class="chevron"></span>
        </span>
      </SelectContainer>
      <label class="row3">(</label>
      <NumberContainer class="Number_number_container__cnrCi undefined ">
        <NumberInput>
          <input
            value={values.Multiplier}
            onChange={updateMultiplier}
            class="Number_number_input__e7X9Q Legbuilder_longer_number_input__L10g3"
            type="number"
            min="1"
          />
          <svg
            class="increment"
            onClick={incrementMulti}
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
            onClick={decrementMulti}
            class="decrement"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
              fill="#C7C7C7"
            ></path>
          </svg>
        </NumberInput>
      </NumberContainer>
      <label class="row3">x</label>
      <label class="row2">ATM Straddle Price</label>
      <label class="row3">)]</label>
    </Container>
  );
};

export default StraddleStrikeSecond;
