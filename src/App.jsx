
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./ShowList";
import Summary from "./Summary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/shows/:id" element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default App;