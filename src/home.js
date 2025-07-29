import restaurantBannerImg from "./wanmin-restaurant.jpg";
import chefMao from "./chefmao.png";
import xiangling from "./xiangling.png";

const contentDiv = document.querySelector("#content");
const restaurantBanner = document.createElement("img");
restaurantBanner.src = restaurantBannerImg;
restaurantBanner.classList.add("restaurant-banner");
contentDiv.appendChild(restaurantBanner);

const welcomeDiv = document.createElement("div");
welcomeDiv.classList.add("welcome-text");
welcomeDiv.innerHTML = `<h1>WELCOME TO WANMIN RESTAURANT</h1>
                        <p>A new twist<br>
                        On an old classic<br>   
                        Wanmin Restaurant welcomes you!</p>`
contentDiv.appendChild(welcomeDiv);

const chefSectionDiv = document.createElement("div");
chefSectionDiv.classList.add("chefs-section");
chefSectionDiv.innerHTML = `<div class="chef-card">
                            <img src=${xiangling} alt="Xiangling">
                            <h3>Xiangling</h3>
                            <p>The Pyro prodigy behind every fiery dish. Passionate, fearless, and just a little too comfortable with Jueyun chilis.</p>
                            </div>

                            <div class="chef-card">
                            <img src=${chefMao} alt="Chef Mao">
                            <h3>Chef Mao</h3>
                            <p>The founder and backbone of Wanmin. Calm, collected, and master of traditional Liyue recipes — Guoba’s personal favorite.</p>
                            </div>`
contentDiv.appendChild(chefSectionDiv);
