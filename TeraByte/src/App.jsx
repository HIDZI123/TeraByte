/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  './styles/header.scss'
import Upload from "./components/Upload";
import './styles/upload.scss'
import Edit from "./components/Edit";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
