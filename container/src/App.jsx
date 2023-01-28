import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import { Name } from 'counter/Name';

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <Counter />
    <Counter />
    <Name />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
