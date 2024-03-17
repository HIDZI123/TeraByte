/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/header.scss';
import './styles/home.scss';
import Upload from "./components/Upload";
import LoginSignup from './components/LoginSignup';
import Edit from "./components/Edit";
import '../src/styles/LoginSignup.css'
import './styles/upload.scss'
import './styles/Edit.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="#about" element = {<Home/>} />
        <Route path="/login" element = {<LoginSignup/>} />
        <Route path="/upload" element = {<Upload/>} />
        <Route path="/edit" element = {<Edit/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
