import React from "react";
import App from "./components/App";
import {render} from "react-dom";

require("./assets/stylesheets/style.sass");

render(<App/>,document.querySelector("#container"));