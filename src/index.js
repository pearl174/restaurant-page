import homeContainer from "./home/home.js";
import menuContainer from "./menu/menu.js";
import "./aboutStyles.css";
import "./styles.css";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const contentDiv = document.querySelector("#content");

// home.addEventListener("click", () => {
//     contentDiv.innerHTML = "";
//     contentDiv.append(homeContainer());    
// })

// menu.addEventListener("click", () => {
//     contentDiv.innerHTML = "";
//     contentDiv.append(menuContainer());
// })

// // about.addEventListener("click", () => {
// //     contentDiv.innerHTML = "";
// //     contentDiv.append(aboutContainer());
// // })

// contentDiv.append(homeContainer());