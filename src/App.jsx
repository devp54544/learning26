import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
// import { HeaderComponent } from "./components/HeaderComponent";
// import { FooterComponent } from "./components/FooterComponent";
// import ContentComponent from "./components/ContentComponent";
// import { MapDemo1 } from "./components/MapDemo1";
// import { MapDemo2 } from "./components/MapDemo2";
// import { MapDemo3 } from "./components/MapDemo3";
// import { MapDemo4 } from "./components/MapDemo4";
// import { MapDemo5 } from "./components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import NetflixSports from "./components/tasks/NetflixSports";
import NetflixSparks from "./components/tasks/NetflixSparks";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { ErrorNotFound } from "./components/ErrorNotFound";
import { Watch } from "./components/Watch";
import TeamDetail from "./components/tasks/TeamDetail";
import Teams from "./components/tasks/Teams";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import InputDemo1  from "./components/InputDemo1";
import InputDemo2  from "./components/tasks/InputDemo2";
import InputDemo3 from "./components/tasks/InputDemo3";
import Students from "./components/tasks/Students";
import Teachers from "./components/tasks/Teachers";
import Dropdown from "./components/tasks/DropDown";
import FormDemo1 from "./components/Forms/FormDemo1";
import FormDemo2 from "./components/Forms/FormDemo2";
import FormDemo3 from "./components/Forms/FormDemo3";
import FormDemo4 from "./components/Forms/FormDemo4";
import FormValidationDemo1 from "./components/Forms/FormValidationDemo1";
import FormValidationDemo2 from "./components/Forms/FormValidationDemo2";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/netflixSports" element={<NetflixSports />}></Route>
        <Route path="/netflixSparks" element={<NetflixSparks />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/fundemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/teamdetail/:name" element={<TeamDetail />}></Route>
        <Route path="/teams" element = {<Teams/>}></Route>
        <Route path="/inputdemo1" element={<InputDemo1/>}></Route>
        <Route path="/inputdemo2" element={<InputDemo2/>}></Route>
        <Route path="/inputdemo3" element={<InputDemo3 />}></Route>
         <Route path="/students" element={<Students />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/dropdown" element={<Dropdown/>}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3/>}></Route>
        <Route path="/formdemo4" element={<FormDemo4/>}></Route>
        <Route path="/formvalidationdemo1" element={<FormValidationDemo1/>}></Route>
        <Route path="/formvalidationdemo2" element={<FormValidationDemo2/>}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;