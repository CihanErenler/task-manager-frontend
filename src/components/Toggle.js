import React from "react";
import styled from "styled-components";

const Toggle = () => {
  return (
    <StyledToggle>
      <input type="checkbox" name="toggle" id="toggle" />
      <label htmlFor="toggle"></label>
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="checkbox"] {
    width: 0;
    height: 0;
    opacity: 0;
  }

  label {
    display: block;
    width: 46px;
    height: 26px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.inputBorder};
    border: 1px solid ${(props) => props.theme.inputBorder};
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    ::before {
      position: absolute;
      content: "";
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.bg1};
      top: 3px;
      left: 3px;
      transition: all 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    }
  }

  input[type="checkbox"]:active + label::before {
    width: 28px;
  }

  input[type="checkbox"]:checked {
    + label {
      background-color: ${(props) => props.theme.primary};

      ::before {
        left: 22px;
      }
    }
  }
`;

export default Toggle;
