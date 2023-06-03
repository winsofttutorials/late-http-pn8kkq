import React from "react";
import "./UserInfoStyles.css";

const UserInfo = (props) => {
  return (
    <>
      <div id="profileInfo">
        <h1>fisrtname: {props.firstname}</h1>
        <h1> lastname: {props.lastname}</h1>
        <h1> email: {props.email}</h1>
      </div>
    </>
  );
};

export default UserInfo;
