import "./aboutStyles.css";
import guobaGif from "./guoba-genshin-impact.gif";

export default function aboutContainer() {
    const aboutWanminDiv = document.createElement("div");
    aboutWanminDiv.innerHTML = `
                                <img src=${guobaGif} alt="Guoba smiling gif" class="guoba-img">
                                <div class="about-wanmin-text">
                                    <p>Welcome to Wanmin Restaurant, nestled in the heart of Chihu Rock, Liyue Harbor.</p>
                                    <p>We're a humble establishment led by Chef Mao, serving dishes that bring warmth to every table.</p>
                                    <p>From daily ingredients to time-honored recipes, our aim is to keep every traveler well fed.</p>
                                    <p>Some say our dream is to unify all cuisines of Teyvat — we just say, come hungry.</p>
                                    <p>Whether you dine in or take out, we promise a taste worth remembering.</p>
                                </div>
    `
    return aboutWanminDiv;
}