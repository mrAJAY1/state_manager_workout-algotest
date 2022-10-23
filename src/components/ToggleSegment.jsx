import styled from "styled-components";

const Container = styled.div`
  display: flex;
  .toggle_label {
    display: inline-flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    text-align: center;
    color: #3f3f3f;
    margin-right: 8px;
  }
`;
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .toggle_option {
    width: 70px;
    height: 24px;
    background: #fff;
    border: 1px solid #f6f6f6;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.textLead};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .toggle_left {
    border-radius: 16px 0 0 16px;
  }
  .toggle_right {
    border-radius: 0 16px 16px 0;
  }
  .checked {
    background: ${(props) => props.theme.textPrimary};
    color: #fff;
    border-color: ${(props) => props.theme.textPrimary};
  }
`;
const ToggleSegment = ({ futureToggle, setFutureToggle }) => {
  return (
    <Container>
      <label htmlFor="input" className="toggle_label">
        Select segments
      </label>
      <ToggleContainer>
        <span
          onClick={() => {
            setFutureToggle(true);
          }}
          className={`toggle_left toggle_option ${futureToggle && "checked"} `}
        >
          Futures
        </span>
        <span
          onClick={() => {
            setFutureToggle(false);
          }}
          className={`toggle_right toggle_option ${
            !futureToggle && "checked"
          } `}
        >
          Options
        </span>
      </ToggleContainer>
    </Container>
  );
};

export default ToggleSegment;
