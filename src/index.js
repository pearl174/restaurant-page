import home from "./home.js";

function display() {
    const contentDiv = document.querySelector("#content");
    contentDiv.append(home());
}

display();