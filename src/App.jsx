// File: App.jsx located in root-directory
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Diary from "./components/Diary";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Header/>
     <Navbar/>
     <Home/>
     <Login/>
     <Register/>
     <Diary/>
     <Footer/>
    </div>
  );
}

export default App;
