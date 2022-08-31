import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import  {SelectJob}  from "./JobMenu.js";
import Task_1 from "./components/task_1";


function App() {

    return (
        <>
            <Task_1/>
            <SelectJob />
            </>
    );

}

export default App;
