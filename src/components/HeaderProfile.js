import React, { useState } from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import Notification from "./Notification";
import ProfileDropdown from "./ProfileDropdown";

const HeaderProfile = ({ name, lastname }) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };
  const fullName = `${name} ${lastname}`;
  return (
    <Div>
      <Notification />
      <Avatar alt={fullName} action={handleProfile} />
      {showProfile ? <ProfileDropdown fullName={fullName} /> : ""}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default HeaderProfile;
