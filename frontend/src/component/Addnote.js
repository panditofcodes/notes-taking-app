import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../App.css";

export default function Addnote() {
  const [notepad, setNotepad] = useState("");
  const [title, setTitle] = useState("");
  const textAreaRef = useRef(null)
  const [serverMsg, setServerMsg] = useState('')
  const navigate = useNavigate()

  const clearArea = () => {
    setNotepad("");
    setTitle("");
  };

  const saveNote = async (e) => {
    e.preventDefault();

    const res = await fetch("/saveNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        notepad,
      }),
    });
    console.log(res.status)
    switch (res.status) {
      case 422:
        setServerMsg('Please Fill up details!')
        break;
      case 201:
        setServerMsg('Notes Saved Successfully!')
        clearArea()
        navigate("/SavedNote")
        break;
      default:
        break;
    }
  };
  useEffect(()=> {
    textAreaRef.current.style.height = "auto"
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
  })

  return (
    <>
    <Nav />
    <div className="container add-note">
  <div className="note-box-input">
    <textarea
      name=""
      id=""
      cols="100"
      rows="1"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{textAlign: "center"}}
    ></textarea>
    <textarea
      name=""
      id=""
      cols="100"
      rows="30"
      placeholder="Write your notes here!"
      value={notepad}
      onChange={(e) => setNotepad(e.target.value)}
      ref={textAreaRef}
    ></textarea>
    <div>
      <button type="reset" onClick={clearArea} className="btn btn-outline-warning">
        Clear
      </button>
      <button type="submit" onClick={saveNote} className="btn btn-outline-success">
        Save
      </button>
      <p>{serverMsg}</p>
    </div>
  </div>
</div>

      <Outlet />
    </>
  );
}
