import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogSingle from "./components/blog/blog-single";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/blog/:id" element={<BlogSingle />} />
      </Routes>
    </Router>
  );
};

export default App;
