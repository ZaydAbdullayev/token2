import Splitting from "splitting";
import ScrollOut from "scroll-out";

const randomInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

document.addEventListener("DOMContentLoaded", () => {
    const PANEL_CONTAINER = document.querySelector("ul");
    const PANELS = [...document.querySelectorAll("li")].sort(() =>
        Math.random() > 0.5 ? -1 : 1
    );

    PANEL_CONTAINER.innerHTML = "";
    PANELS.forEach((panel) => PANEL_CONTAINER.appendChild(panel));

    Splitting();
    ScrollOut({
        targets: [".word", ".falling", ".scrolled", ".glare", ".stream"],
        scrollingElement: "ul",
    });

    const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split("");
    const CHARS = document.querySelectorAll(".glitchy .char");
    for (let c = 0; c < CHARS.length; c++) {
        for (let g = 0; g < 10; g++) {
            CHARS[c].style.setProperty(
                `--char-${g}`,
                `"${GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]}"`
            );
        }
    }

    const RANDOM_CHARS = document.querySelectorAll(".random .char");
    RANDOM_CHARS.forEach((char) => {
        char.style.setProperty("--x", randomInRange(-1000, 1000));
        char.style.setProperty("--y", randomInRange(-1000, 1000));
    });

    const EXPANDING_WORDS = document.querySelectorAll(".expanding .word");
    EXPANDING_WORDS.forEach((word, index) => {
        const exp = (index % 2) + 1;
        if (index !== 0) {
            word.style.setProperty(
                "--expansion-position",
                index > 2.5 ? exp : exp * -1
            );
            word.style.setProperty("--expansion-index", exp);
        }
    });
});
