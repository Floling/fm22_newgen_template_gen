import { genRandomNum } from "./gen-random-number.js";


function hiddenAttributesBlock() {
    document.getElementById("attributes").innerHTML = `
        <h2>Personal Attributes</h2>
        <div class='hidden-attributes'>
            <h3>Hidden</h3>
            <p>Player PA: <span>${genRandomNum(155, 166)}</span></p>
            <p>Adaptability: <span>${genRandomNum(15, 21)}</span></p>
            <p>Ambition: <span>${genRandomNum(10, 16)}</span></p>
            <p>Loyalty: <span>${genRandomNum(15, 21)}</span></p>
            <p>Pressure: <span>${genRandomNum(15, 21)}</span></p>
            <p>Professionalism: <span>${genRandomNum(15, 21)}</span></p>
            <p>Sportsmanship: <span>${genRandomNum(10, 21)}</span></p>
            <p>Temperament: <span>${genRandomNum(10, 16)}</span></p>
            <p>Controversy: <span>${genRandomNum(1, 11)}</span></p>
            <p>Consitency: <span>${genRandomNum(15, 21)}</span></p>
            <p>Dirtines: <span>${genRandomNum(1, 6)}</span></p>
            <p>Important Games: <span>${genRandomNum(12, 21)}</span></p>
            <p>Injury proneness: <span>${genRandomNum(1, 4)}</span></p>
            <p>Versatility: <span>${genRandomNum(10, 21)}</span></p>
        </div>
    `;
};

export { hiddenAttributesBlock }