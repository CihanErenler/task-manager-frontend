import React, { useState } from "react";
import styled from "styled-components";

import { IoNotificationsOutline } from "react-icons/io5";

const Notification = ({ active }) => {
  return (
    <Div>
      {active ? <span></span> : ""}
      <IoNotificationsOutline
        size={26}
        style={{ marginRight: 10, cursor: "pointer" }}
      />
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    background-color: red;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 2px;
    border-radius: 50%;
  }
`;

export default Notification;
