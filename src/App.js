import React from "react";
import "./styles.css";
import Navbar from "./Component/Navbar";
import UserInfo from "./Component/UserInfo";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cardFrame">
        <div id="userCard">
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
        </div>
        <div id="userCard">
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
          <UserInfo
            firstname={"Wonyengikuro"}
            lastname={"Ifidi"}
            email={"winsofttutorials@gmail.com"}
          />
        </div>
      </div>
    </div>
  );
}
