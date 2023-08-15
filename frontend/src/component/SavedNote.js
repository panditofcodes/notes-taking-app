// import { useParams } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";
import Notes from "./Notes";

export default function SavedNote() {
  // const params = useParams();

  // const restoreNote = async () =>{
  //   console.log(params)
  //   try {
  //     // Construct the URL with the noteId as a query parameter
  //     const url = `/handleRestoreNote?restoreNoteId=${params.restoreNoteId}`;

  //     try {
  //       const res = await fetch(url,{
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   } catch (error) {
  //     // Handle any network or other errors
  //     console.log(error)
  //   }

  //  }

  // useEffect(() => {
  //   restoreNote()
  // }, [])
  
  return (
    <>
      <Nav />
      <Notes/>
    </>
  );
}
