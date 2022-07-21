import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${(focus) => focus.theme.inputBorder};
  border-radius: 6px;
  background-color: ${(props) => props.theme.inputBg};
  padding: 0 20px;
  margin-top: 20px;
  transition: all 0.3s ease;

  :focus {
    box-shadow: 0 0 0 4px ${(props) => props.theme.buttonFocus};
    border-color: ${(props) => props.theme.inputBorderFocus};
    outline: none;
  }
`;

const CustomInput = ({ value, onchange, placeholder }) => {
  return (
    <TextInput
      onChange={(e) => onchange(e.target.value)}
      value={value}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
