import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'
import "../App.css"

function DeletedNotes() {
  const navigate = useNavigate();
  // const params = useParams();
  const [userNotes, setUserNotes] = useState('')
 
 

  useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = async ()=>{
    try {
      const response = await fetch("/deletedNotes", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();

      if (data.length > 0) {
        setUserNotes(data)
      } else{
        setUserNotes([])
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  const handleRestore = async (restoreNoteId)=>{
   
    const url = `/move/${restoreNoteId}`;

    try {
      const res = await fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (res.ok) {
        // alert("Restored Successfully!")
        navigate("/SavedNote")
      } else {
        alert("Some Error Occured!")
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleDelete = async (noteId) => {
    
    try {
      const url = `/deleteNote/${noteId}`;
  
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log(res.status)

      if (res.ok) {
        loadNotes()
      } else {
        window.alert("Error!")
      }
  
    } catch (error) {
      // Handle any network or other errors
      console.log(error);
    }
  };
  
  return (
    <>
    <Nav/>
    <div className="container">
      <div className='container tile-container'>
      {userNotes.length > 0 ? (
          userNotes.map((showingNotes) => {
            return (
              <div className="note-box" key={showingNotes._id}> {/* Use _id property instead of just _id */}
                <h2 className="card-header">{showingNotes.title}</h2>
                {/* <textarea
                  cols="75"
                  rows="10"
                  defaultValue={showingNotes.notepad}
                  disabled
                /><br/> */}
                <p className="card-text text-wrap">{showingNotes.notepad}</p>
                <div className="card-footer bg-transparent border-success">
                <button onClick={()=>handleRestore(showingNotes._id)} className="btn btn-outline-success" >Restore</button>
                <button onClick={() => handleDelete(showingNotes._id)} class="btn btn-outline-danger" >Delete</button>
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
    </div>
    </>
  )
}

export default DeletedNotes