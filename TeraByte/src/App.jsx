/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  './styles/header.scss'
import Upload from "./components/Upload";
import LoginSignup from './components/LoginSignup';
import '../src/styles/LoginSignup.css'

const App = () => {
  return (
    <div>
    
    <LoginSignup/>
    </div>
  );
};

export default App;
