import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.scss'
import RoutersComponents from "./components/routers/RoutersComponents";

export default () => {
  return (
    <div className="app-mudiale">
        <BrowserRouter>
            <div></div>
            <RoutersComponents></RoutersComponents>
        </BrowserRouter>
    </div>
  );
}
