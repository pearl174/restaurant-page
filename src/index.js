import home from "./home/home.js";

function display() {
    const contentDiv = document.querySelector("#content");
    contentDiv.append(home());
}

// display();