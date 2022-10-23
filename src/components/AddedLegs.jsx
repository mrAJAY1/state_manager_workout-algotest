import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFormDefault } from "../slices/LegBuilderSlice";
import {
  copyLeg,
  updateEntryType,
  updateLegTrailSL,
  updateOptionTypeNew,
  updateStikeParameter,
} from "../slices/NewLegComponentSlice";
import {
  deleteLeg,
  updateExpiryKind,
  updateLots,
  updatePositionTypeNew,
} from "../slices/NewLegComponentSlice";
import EntryByRangeSecond from "../subComponents/EntryByRangeSecond";
import EntryPremiumSecond from "../subComponents/EntryPremiumSecond";
import LegMomentum from "../subComponents/LegMomentum";
import LegTrailSL from "../subComponents/LegTrailSL";
import StraddleStrikeSecond from "../subComponents/StraddleStrikeSecond";

const Container = styled.div`
  margin-top: 32px;
  position: relative;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${(p) => p.theme.bluredBorder};
  .delete {
    position: absolute;
    width: 24px;
    height: 24px;
    right: -12px;
    cursor: pointer;
    margin: 0;
    top: -12px;
  }
`;
const CopyBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 50%;
  top: 20px;
  position: absolute;
  width: 24px;
  height: 24px;
  right: -12px;
  cursor: pointer;
`;
const LegItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  align-items: flex-end;
  flex-wrap: wrap;
  text-align: center;
`;
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
const SelectContainer = styled.div`
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

const LegInput = styled.div`
  margin-top: 8px;
  margin-right: 8px;
  display: flex;
`;
const ControlBtn = styled.button`
  min-width: 129px;
  height: 28px;
  border-radius: 17.5px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 0 1rem;
  &.active {
    background: ${(p) => p.theme.textPrimary};
    border: 1px solid ${(p) => p.theme.bluredBorder};
    color: ${(p) => p.theme.textSecondary};
    margin-left: 8px;
  }
  &.cancel {
    background: ${(p) => p.theme.textSecondary};
    border: 1px solid #efefef;
    color: ${(p) => p.theme.textPrimary};
    margin-left: 8px;
  }
`;
const AddedLegs = () => {
  const { Legs } = useSelector((store) => store.NewLeg);
  const handleSubmit = () => {};
  const dispatch = useDispatch();
  return (
    <div>
      {Legs.map((item, index) => {
        return (
          <Container key={index}>
            <svg
              onClick={() => dispatch(deleteLeg(index))}
              className="delete"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 .96C5.913.96.96 5.913.96 12c0 6.087 4.953 11.04 11.04 11.04 6.087 0 11.04-4.953 
            11.04-11.04C23.04 5.913 18.087.96 12 .96Zm4.18 14.54a.484.484 0 0 1 0 .68.492.492 0 0 1-.34.14.492.492 0
             0 1-.34-.14L12 12.683 8.5 16.18a.492.492 0 0 1-.34.139.492.492 0 0 1-.34-.14.484.484 0 0 1 0-.68l3.498-3.5L7.82 
             8.5a.484.484 0 0 1 0-.68.484.484 0 0 1 .682 0L12 11.317l3.5-3.499a.484.484 0 0 1 .68 0 .484.484 0 0 1 0 .682L12.683 12l3.499 3.5Z"
                fill="#F07777"
              ></path>
            </svg>
            <CopyBtn onClick={(e) => dispatch(copyLeg(index))}>
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.56 0v1.44l.48.48V.48h3.6v2.88h2.88V9.6h-3.6v.48H12V3.022L8.977 0H4.56Zm4.56.818 2.063 2.062H9.12V.817ZM0 1.92V12h7.44V4.942l-.068-.075-2.88-2.88-.074-.067H0Zm.48.48h3.6v2.88h2.88v6.24H.48V2.4Zm4.08.345L6.615 4.8H4.56V2.745Z"
                  fill="#375A9E"
                ></path>
              </svg>
            </CopyBtn>
            <LegItem>
              <NumberContainer>
                <label htmlFor="">Lots</label>
                <NumberInput>
                  <input
                    value={item.Lots}
                    onChange={(e) =>
                      dispatch(updateLots({ value: e.target.value, index }))
                    }
                    type="number"
                  />
                  <svg
                    className="numberIncrement"
                    onClick={(e) =>
                      dispatch(updateLots({ value: item.Lots + 1, index }))
                    }
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
                    onClick={(e) =>
                      item.Lots > 0 &&
                      dispatch(updateLots({ value: item.Lots - 1, index }))
                    }
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
              <SelectContainer>
                <span>
                  <select
                    value={item.PositionType}
                    onChange={(e) =>
                      dispatch(
                        updatePositionTypeNew({ value: e.target.value, index })
                      )
                    }
                  >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                  </select>
                  <span className="chevron"></span>
                </span>
              </SelectContainer>
              <SelectContainer>
                <span>
                  <select
                    value={item.OptionType}
                    onChange={(e) =>
                      dispatch(
                        updateOptionTypeNew({ value: e.target.value, index })
                      )
                    }
                  >
                    <option value="LegType.CE">Call</option>
                    <option value="LegType.PE">Put</option>
                  </select>
                  <span className="chevron"></span>
                </span>
              </SelectContainer>
              <SelectContainer>
                <span>
                  <select
                    value={item.ExpiryKind}
                    onChange={(e) =>
                      dispatch(
                        updateExpiryKind({ value: e.target.value, index })
                      )
                    }
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                  <span className="chevron"></span>
                </span>
              </SelectContainer>

              <SelectContainer className="select2">
                <label htmlFor="">Select Strike</label>
                <span>
                  <select
                    value={item.EntryType}
                    onChange={(e) =>
                      dispatch(
                        updateEntryType({ value: e.target.value, index })
                      )
                    }
                  >
                    <option value="EntryByStrikeType">Strike Type</option>
                    <option value="EntryByPremiumRange">Premium Range</option>
                    <option value="EntryByPremium">Closest Premium</option>
                    <option value="EntryByStraddlePrice">Straddle Width</option>
                  </select>
                  <span className="chevron"></span>
                </span>
              </SelectContainer>
              {item.EntryType === "EntryByPremiumRange" ? (
                <EntryByRangeSecond
                  StrikeParameter={item.StrikeParameter}
                  dispatch={dispatch}
                  index={index}
                />
              ) : item.EntryType === "EntryByPremium" ? (
                <EntryPremiumSecond
                  dispatch={dispatch}
                  index={index}
                  StrikeParameter={item.StrikeParameter}
                />
              ) : item.EntryType === "EntryByStrikeType" ? (
                <SelectContainer>
                  <span>
                    <select
                      value={item.StrikeParameter}
                      onChange={(e) =>
                        dispatch(
                          updateStikeParameter({ value: e.target.value, index })
                        )
                      }
                    >
                      <option value="ATM">ATM</option>
                      <option value="OTM1">OTM1</option>
                    </select>
                    <span className="chevron"></span>
                  </span>
                </SelectContainer>
              ) : item.EntryType === "EntryByStraddlePrice" ? (
                <StraddleStrikeSecond
                  dispatch={dispatch}
                  index={index}
                  StrikeParameter={item.StrikeParameter}
                />
              ) : (
                <></>
              )}
            </LegItem>
            <LegItem>
              <LegInput>
                <LegMomentum
                  dispatch={dispatch}
                  LegMomentumValue={item.LegMomentum}
                  index={index}
                />
                <LegTrailSL
                  dispatch={dispatch}
                  LegTrailSLValue={item.LegTrailSL}
                  index={index}
                />
              </LegInput>
            </LegItem>
          </Container>
        );
      })}
    </div>
  );
};

export default AddedLegs;
