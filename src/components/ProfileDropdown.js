import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/authContext";
import Seperator from "./Seperator";
import DropdownItem from "./DropdownItem";
import Avatar from "./Avatar";

const ProfileDropdown = ({ fullName }) => {
  const { logoutUser, user } = useAuthContext();
  return (
    <Div>
      <section>
        <Avatar alt={fullName} />
        <div>
          <p>{fullName}</p>
          <p>{user.email}</p>
        </div>
      </section>
      <Seperator />
      <DropdownItem>Dark Mode</DropdownItem>
      <Seperator />
      <div className="logout-btn" onClick={logoutUser}>
        Log uot
      </div>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  width: 300px;
  background-color: ${(props) => props.theme.bg1};
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 10px;
  top: 50px;
  right: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-top: 20px;
  font-size: 14px;

  > div {
    margin-bottom: 20px;
    padding: 0 20px;
    transition: all 0.3s ease;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.primary};
    }
  }

  > section {
    display: flex;
    align-items: center;
    padding: 0 20px;
    > div {
      p:nth-child(1) {
        color: ${(props) => props.theme.textColor};
        font-weight: 500;
        margin-bottom: 5px;
      }

      p:nth-child(2) {
        color: ${(props) => props.theme.textColorLight};
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;

export default ProfileDropdown;
