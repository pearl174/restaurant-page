import "./homeStyles.css";
import restaurantBannerImg from "./wanmin-restaurant.jpg";
import chefMao from "./chefmao.png";
import xiangling from "./xiangling.png";

function home() {
    const parentDiv = document.createElement("div");
    const restaurantBanner = document.createElement("img");
    restaurantBanner.src = restaurantBannerImg;
    restaurantBanner.classList.add("restaurant-banner");
    parentDiv.appendChild(restaurantBanner);

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-text");
    welcomeDiv.innerHTML = `<h1>WELCOME TO WANMIN RESTAURANT</h1>
                            <p>A new twist<br>
                            On an old classic<br>   
                            Wanmin Restaurant welcomes you!</p>`
    parentDiv.appendChild(welcomeDiv);

    const chefSectionDiv = document.createElement("div");
    chefSectionDiv.classList.add("chefs-section");
    chefSectionDiv.innerHTML = `<div class="chef-card">
                                <img src=${xiangling} alt="Xiangling">
                                <h3>Xiangling</h3>
                                <p>The head chef of Wanmin Restaurant. Passionate and cheery, the best to ever do it! Always with her trusty companion, Guoba, experimenting with new and novel ingredients.</p>
                                </div>

                                <div class="chef-card">
                                <img src=${chefMao} alt="Chef Mao">
                                <h3>Chef Mao</h3>
                                <p>The founder and backbone of Wanmin. Calm, collected, and master of traditional Liyue recipes — Guoba's personal favorite.</p>
                                </div>`
    parentDiv.appendChild(chefSectionDiv);
    return parentDiv;
}

export default home;