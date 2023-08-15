import React from "react";
import Nav from "./Nav";
import Notes from "./Notes";
import "../App.css";

export default function Landingpage() {
  return (
    <>
    <Nav />
      <div className="container">
        <Notes />
      </div>
    </>
  );
}
