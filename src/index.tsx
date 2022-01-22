import { render } from "react-dom";
import "./api/server.js";
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
