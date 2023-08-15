import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Notes() {
  const [userNotes, setUserNotes] = useState([]);
  const [showNote, SetShowNote] = useState(false);
  const [notepad, setNotepad] = useState("");
  const [editNote, setEditNote] = useState(true);
  const [saveNote, setSaveNote] = useState("Edit");
  const [temp, setTemp] = useState([]);
  // const textAreaRef = useRef(null);
  // const navigate = useNavigate();

  useEffect(() => {
    notes();
  }, []);
  const handleTextArea = async (noteId, modelNotepad) => {
    if (editNote) {
      setEditNote(!editNote);
      setSaveNote("Save");
    } else {
      const url = `/updateNote/${noteId}`;
      try {
        const res = await fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            modelNotepad,
          }),
        });
        if (res.ok) {
          setEditNote(!editNote);
          setSaveNote("Edit");
          setNotepad(modelNotepad);
        }
      } catch (err) {}
    }
  };

  const notes = async () => {
    try {
      const response = await fetch("/savedNote", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();

      if (data.length > 0) {
        setUserNotes(data);
      } else {
        setUserNotes([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowNote = async (noteId) => {
    const url = `/showNote/${noteId}`;
    SetShowNote(true);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setNotepad(data[0].notepad);
        setTemp(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    SetShowNote(false);
    notes();
  };

  const NoteModel = () => {
    const [modelNotepad, setModelNotepad] = useState(notepad);
    return (
      <>
        {temp && temp.length > 0 ? (
          <div className="showNote-wrapper">
            <div className="showNote-container">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
              <h3>{temp[0].title}</h3>
              <textarea
                cols="75"
                rows="25"
                value={modelNotepad}
                onChange={(e) => setModelNotepad(e.target.value)}
                disabled={editNote}
                style={{ resize: "none" }}
              />
              <button
                onClick={() => handleTextArea(temp[0]._id, modelNotepad)}
                className={`btn ${
                  editNote ? "btn-outline-secondary" : "btn-outline-success"
                }`}
              >
                {saveNote}
              </button>
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </>
    );
  };

  const handleMoveToBin = async (noteId) => {
    const url = `/move/${noteId}`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        notes();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (noteId) => {
    window.alert("Note will be deleted!");
    try {
      const url = `/deleteNote/${noteId}`;

      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log(res.status)

      if (res.ok) {
        notes();
      } else {
        window.alert("Error!");
      }
    } catch (error) {
      // Handle any network or other errors
      console.log(error);
    }
  };

  return (
    <>
      <div className="container tile-container">
        {userNotes.length > 0 ? (
          userNotes.map((showingNotes) => {
            return (
              <div className="note-box" key={showingNotes._id}>
                <h2 className="card-header">{showingNotes.title}</h2>
                {/* <textarea
                  cols="75"
                  rows="10"
                  defaultValue={showingNotes.notepad}
                  disabled
                /><br/> */}
                <p
                  className="card-text text-wrap"
                  onClick={() => handleShowNote(showingNotes._id)}
                >
                  {showingNotes.notepad}
                </p>
                <div className="card-footer bg-transparent border-success ">
                  {/* <button  onClick={() => handleShowNote(showingNotes._id)}>
                    See
                  </button> */}
                  <button
                    onClick={() => handleMoveToBin(showingNotes._id)}
                    className="btn btn-outline-info"
                  >
                    Move To Bin
                  </button>
                  <button
                    onClick={() => handleDelete(showingNotes._id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <p>No notes available.</p>
            <Link to="/Addnote">Add Note</Link>
          </div>
        )}
      </div>
       {showNote && <NoteModel />}
    </>
  );
}
