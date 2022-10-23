import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { updateLegMomentum } from "../slices/NewLegComponentSlice";

const OptionalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 73.5px;
  .checkboxContainer {
    display: flex;
    flex-direction: column;
    input:not(:last-child) {
      margin-right: 8px;
    }
  }
  .checkboxContainer:not(:last-child) {
    margin-right: 8px;
  }
  label {
    align-self: flex-start;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 14px;
    color: ${(p) => p.theme.textDefault};
    margin-bottom: 8px;
    display: inline-flex;
    align-items: center;
  }
  span {
    &.checked {
      border-color: #375a9e;
      background: #375a9e;
    }
    display: inline-block;
    position: relative;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border: 1px solid #c7c7c7;
    border-radius: 2px;
    box-sizing: content-box;
    transition: all 0.2s ease;
  }
  span:after {
    content: "";
    position: absolute;
    visibility: ${(p) => (p.momentumState ? "hidden" : "visible")};
    top: -0.8px;
    left: 2.4px;
    box-sizing: content-box;
    width: 3px;
    height: 6px;
    border: solid #fff;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const NumberContainer = styled.div`
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
export const NumberInput = styled.div`
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
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8px;
  margin-right: 8px;
  &.select2 {
    flex-direction: row;
  }
  label {
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    color: ${(p) => p.theme.textLead};
    display: inline-flex;
    align-items: center;
    margin-bottom: 2px;
    margin-right: 8px;
  }
  span {
    width: fit-content;
    position: relative;
    color: ${(p) => p.theme.textLead};
  }
  select {
    appearance: none;
    border: 1px solid #f6f6f6;
    border-radius: 17.5px;
    padding: 5px 32px 5px 13px;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 14px;
    color: ${(p) => p.theme.textSecondary};
    background-color: #375a9e;
  }
  .chevron {
    border: solid #fff;
    border-width: 0 1px 1px 0;
    display: inline-block;
    position: absolute;
    right: 16px;
    top: 6px;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    pointer-events: none;
  }
  .selectExtra {
    align-self: flex-start;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 14px;
  }
`;

const OptionalInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 0.125rem;

  .numberContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const MomentumSelect = styled(SelectContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 8px;
  }
  span {
    width: fit-content;
    position: relative;
    border: 0;
    height: auto;
    color: ${(p) => p.theme.textLead};
  }
  span::after {
    display: none;
  }
  select {
    align-self: flex-start;
    font-style: normal;
    max-width: 100px;

    font-weight: 300;
    font-size: 13px;
    line-height: 14px;
    & :not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const LegMomentum = ({ dispatch, index, LegMomentumValue }) => {
  const [momentumState, setMomentumState] = useState(false);
  const [values, setValues] = useState({ ...LegMomentumValue });
  const momentumClicked = () => {
    setMomentumState(!momentumState);
  };
  const typeChange = (e) => {
    const { value } = e.target;
    const num = values.Value ? values.Value : 1;
    setValues({ Value: num, Type: value });
  };
  const valueChange = (e) => {
    const { value } = e.target;
    setValues({ ...values, Value: value });
  };
  const increment = () => {
    const number = values.Value === "" ? 0 : values.Value;
    setValues({ ...values, Value: number + 1 });
  };
  const decrement = () => {
    values.Value !== "" &&
      (values.Value > 0 && setValues({ ...values, Value: values.Value - 1 }));
  };
  const ref = useRef(null);
  const updateRef = () => {
    ref.current += 1;
  };
  const resetRef = () => {
    ref.current = null;
  };
  useEffect(() => {
    updateRef();
    !momentumState && resetRef();
    momentumState && ref.current === 1
      ? dispatch(
          updateLegMomentum({
            value: { Type: "MomentumType.PointsUp", Value: 1 },
            index,
          })
        )
      : momentumState
      ? dispatch(updateLegMomentum({ value: values, index }))
      : dispatch(
          updateLegMomentum({ value: { Type: "none", Value: null }, index })
        );
  }, [momentumState, values]);
  return (
    <OptionalInputContainer>
      <div className="optionalInputContainer">
        <div className="checkboxContianer" onClick={momentumClicked}>
          <label>
            <span className={momentumState ? "checked" : null}></span>
            Simple Momentum
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-tip=""
              data-html="true"
              data-for="3bpb4h5"
            >
              <path
                d="M7 .56A6.447 6.447 0 0 0 .56 7c0 3.551 2.889 6.44 6.44 6.44 3.551 0 6.44-2.889 6.44-6.44A6.447 6.447 0 0 0 7 .56Zm.503 9.782c0 .06-.04.1-.1.1H6.64c-.061 0-.1-.04-.1-.1v-.864c0-.06.04-.1.1-.1h.763c.06 0 .1.04.1.1v.864Zm.884-3.827-.673.924c-.201.271-.262.412-.262.753v.321c0 .06-.04.1-.1.1H6.69c-.06.002-.1-.039-.1-.099v-.412c0-.402.09-.612.301-.904l.673-.924c.351-.482.472-.713.472-1.054 0-.572-.402-.934-.974-.934-.562 0-.924.341-1.044.954-.01.06-.05.09-.111.08l-.632-.11c-.061-.01-.09-.05-.081-.11.15-.965.844-1.598 1.888-1.598 1.084 0 1.817.713 1.817 1.707 0 .483-.17.834-.511 1.306Z"
                fill="#C7C7C7"
              ></path>
            </svg>
          </label>
        </div>
        <OptionalInput
          style={{
            opacity: !momentumState && "0.3",
            pointerEvents: !momentumState && "none",
          }}
        >
          <MomentumSelect>
            <span>
              <select
                value={values.Type}
                onChange={typeChange}
                className="selectExtra"
              >
                <option value="MomentumType.PointsUp">Points ↑</option>
                <option value="MomentumType.PointsDown">Points ↓</option>
                <option value="MomentumType.PercentageUp">Percentage ↑</option>
                <option value="MomentumType.PercentageDown">
                  Percentage ↓
                </option>
                <option value="MomentumType.UnderlyingPointsUp">
                  Underlying Points ↑
                </option>
                <option value="MomentumType.UnderlyingPointsDown">
                  Underlying Points ↓
                </option>
                <option value="MomentumType.UnderlyingPercentageUp">
                  Underlying Percentage ↑
                </option>
                <option value="MomentumType.UnderlyingPercentageDown">
                  Underlying Percentage ↓
                </option>
              </select>
            </span>
          </MomentumSelect>
          <NumberContainer className="numberContainer">
            <NumberInput>
              <input
                min={1}
                value={values.Value || 1}
                onChange={valueChange}
                type="number"
              />
              <svg
                className="numberIncrement"
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
                className="numberDecrement"
                onClick={decrement}
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
          <div
            className="Number_number_container__cnrCi undefined "
            style={{ display: `${!momentumState && "none"}` }}
          >
            <div className="Number_input_container__HkEUT">
              <input
                className="Number_number_input__e7X9Q OptionalInput_longer_number_input__CkIH4"
                type="number"
                min="1"
              />
              <svg
                className="Number_number_increment_icon__i0rEL"
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
                className="Number_number_decrement_icon__r5s38"
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
            </div>
          </div>
        </OptionalInput>
      </div>
    </OptionalInputContainer>
  );
};

export default LegMomentum;
