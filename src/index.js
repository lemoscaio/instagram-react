import "./sass/index.scss"

import reactDom from "react-dom";
import App from "./components/App"

const root = document.querySelector(".root")
reactDom.render(<App />, root)