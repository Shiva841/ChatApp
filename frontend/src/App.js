import React from "react";
import {
  BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Messenger from "./pages/Messenger";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/messenger" element={<Messenger/>} />
        </Routes>
    </Router>
    ) ;
}

export default App;
