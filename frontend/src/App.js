import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addnote from "./component/Addnote";
import SavedNote from "./component/SavedNote";
import Bin from "./component/Bin";
//import Nav from "./component/Nav";
import "./App.css";
import Homepage from "./component/Homepage";
import Landingpage from "./component/Landingpage";
import Notes from "./component/Notes";
import SignIn from "./component/SignIn";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {/* {<Route path="/" element={<Homepage />}>
              <Route path="Landingpage" element={<Landingpage />} />
                <Route path="Addnote" element={<Addnote />} />
                <Route path="SavedNote" element={<SavedNote />} />
                <Route path="DeletedNotes" element={<DeletedNotes />} />
              <Route/>
            </Route>} */}
            <Route path="/" element={<Homepage />} />
            <Route path="Landingpage" element={<Landingpage />} />
            <Route path="Addnote" element={<Addnote />} />
            <Route path="SavedNote" element={<SavedNote />} />
            <Route path="Bin" element={<Bin />} />
            <Route path="Notes" element={<Notes />} />
            <Route path="SignIn" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
