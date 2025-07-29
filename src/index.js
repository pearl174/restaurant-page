import home from "./home/home.js";
import "./menuStyles.css";

function display() {
    const contentDiv = document.querySelector("#content");
    contentDiv.append(home());
}

// display();