import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setFormDefault,
  updateStrikeTypeParam,
} from "../slices/LegBuilderSlice";
import { addNewLeg, setDataDefault } from "../slices/NewLegComponentSlice";
import { getData, uploadLegs } from "../slices/UploadedLegs";
import AddedLegs from "./AddedLegs";
import LegBuilderForm from "./LegBuilderForm";
import ToggleSegment from "./ToggleSegment";
import DataDisplay from "../subComponents/copies/DataDisplay";

const Container = styled.div`
  overflow-y: auto;
  padding: 32px;
  width: calc(100vw - 185px);
  user-select: none;
`;
const LegNameLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.bluredBorder};
  color: ${(props) => props.theme.textLead};
  .addLeg {
    color: ${(props) => props.theme.textPrimary};
    font-size: 18px;
    cursor: pointer;
  }
  .active {
    opacity: 0.2;
  }
`;
const LegList = styled.div`
  padding: 2rem;
  margin: 0 1rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0;
`;

const LegBuilderControl = styled.div`
  display: flex;
  justify-content: space-between;
  &.controll2 {
    margin-left: auto;
    margin-top: 35px;
  }
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
  &.active2 {
    background: green;
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

const AddLegComponent = () => {
  const [addLegToggle, setAddLegToggle] = useState(false);
  const [viewDB, setViewDB] = useState(false);
  const [futureToggle, setFutureToggle] = useState(false);
  const LegData = useSelector((store) => store.LegBuilder);
  const { Legs } = useSelector((store) => store.NewLeg);
  const { UploadedLegs } = useSelector((store) => store.Uploaded);
  const dispatch = useDispatch();

  const PremiumParam = useSelector((store) => store.PremiumEntry);
  const PremiumRangeParam = useSelector((store) => store.PremiumRange);
  const StraddleTypeParam = useSelector((store) => store.StraddleType);
  const StrikeTypeParam = useSelector((store) => store.StrikeType);
  const handleFinalSubmit = () => {
    dispatch(uploadLegs(Legs));
  };
  const handleSubmit = async () => {
    return dispatch(addNewLeg(LegData));
  };
  useEffect(() => {
    if (LegData.EntryType === "EntryByStraddlePrice") {
      dispatch(updateStrikeTypeParam(StraddleTypeParam));
    } else if (LegData.EntryType === "EntryByStrikeType")
      dispatch(updateStrikeTypeParam(StrikeTypeParam));
    else if (LegData.EntryType === "EntryByPremiumRange") {
      dispatch(updateStrikeTypeParam(PremiumRangeParam));
    } else if (LegData.EntryType === "EntryByPremium")
      dispatch(updateStrikeTypeParam(PremiumParam));
  }, [
    LegData.EntryType,
    PremiumParam,
    PremiumRangeParam,
    StraddleTypeParam,
    StrikeTypeParam,
  ]);
  return (
    <Container>
      <LegNameLabel>
        <span>Legs</span>
        <span
          className={`addLeg ${addLegToggle && "active"}`}
          onClick={() => setAddLegToggle(!addLegToggle)}
        >
          + Add Leg
        </span>
      </LegNameLabel>
      {addLegToggle && (
        <LegList>
          {/* Segment */}
          <ToggleSegment
            futureToggle={futureToggle}
            setFutureToggle={setFutureToggle}
          />
          {/* Segment*/}
          {/* LegBuilderForm*/}
          <LegBuilderForm futureToggle={futureToggle} />
          {/* LegBuilderForm*/}
          <LegBuilderControl>
            <ControlBtn onClick={handleSubmit} className="active">
              Add Leg
            </ControlBtn>
            <ControlBtn
              className="cancel"
              onClick={() => {
                setAddLegToggle(false);
                dispatch(setFormDefault());
              }}
            >
              Cancel
            </ControlBtn>
          </LegBuilderControl>

          <AddedLegs />
          {Legs.length > 0 && (
            <LegBuilderControl className="controll2">
              <ControlBtn onClick={handleFinalSubmit} className="active2">
                Upload Legs
              </ControlBtn>
              <ControlBtn
                className="cancel"
                onClick={() => {
                  dispatch(setDataDefault());
                  setAddLegToggle(false);
                }}
              >
                Cancel
              </ControlBtn>
            </LegBuilderControl>
          )}
        </LegList>
      )}
      <h3 style={{ marginTop: "30px", color: "#3f3f3f" }}>
        Legs In DB &#160; &#160;
      </h3>
      <h4
        style={{ color: "#375a9e" }}
        onClick={(e) => {
          setViewDB(!viewDB);
          dispatch(getData());
        }}
      >
        {viewDB ? "Hide" : "View"}
      </h4>
      {viewDB &&
        UploadedLegs.map((item, index) => {
          return <DataDisplay values={item} index={index} />;
        })}
    </Container>
  );
};

export default AddLegComponent;
