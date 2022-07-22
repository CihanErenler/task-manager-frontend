import React, { useRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.inputBg};
    border: 1px solid ${(props) => props.theme.inputBorder};
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
    margin-right: 6px;
  }

  input[type="checkbox"]:checked + span {
    background-color: ${(props) => props.theme.primary} !important;

    ::after {
      content: "";
      position: absolute;
      height: 13px;
      width: 6px;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
      left: 50%;
      top: 2px;
      transform: translateX(-50%) rotate(45deg);
      transition: all 0.3s ease;
    }
  }

  input:focus + span {
    box-shadow: 0 0 0 4px ${(props) => props.theme.buttonFocus} !important;
  }

  input:hover + span {
    border-color: ${(props) => props.theme.primary};
  }
`;

const CustomCheckbox = ({ onchange, label, value, id }) => {
  const input = useRef(null);
  const handleOnClick = () => {
    onchange(!value);
    input.current.focus();
  };
  return (
    <Div>
      <input
        id={id}
        type="checkbox"
        ref={input}
        value={value}
        onChange={() => onchange(!value)}
        checked={value}
      />
      <span onClick={handleOnClick}></span>
    </Div>
  );
};

export default CustomCheckbox;
