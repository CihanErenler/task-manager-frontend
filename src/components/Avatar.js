import React from "react";
import styled from "styled-components";

const Avatar = ({ src, alt, bg, size }) => {
  const firstLetters = alt
    .split(" ")
    .map((item) => item.charAt(0))
    .join("")
    .toUpperCase();

  if (src) {
    return (
      <Div size={size}>
        <img src={src} alt={alt} />
      </Div>
    );
  }
  return (
    <Letters size={size} bg={bg}>
      {firstLetters}
    </Letters>
  );
};

const Letters = styled.div`
  width: ${(props) => (props.size ? props.size : "35px")};
  height: ${(props) => (props.size ? props.size : "35px")};
  background-color: ${(props) => (props.bg ? props.bg : props.theme.primary)};
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 18px;
`;

const Div = styled(Letters)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Avatar;
