const carousels = document.querySelectorAll(".carrusel");

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll("img");
    const next = carousel.querySelector(".adelante");
    const prev = carousel.querySelector(".atras");
    let index = 0;

    function showImage(i) {
        images.forEach(img => {
            img.classList.remove("activo");
        });
        images[i].classList.add("activo");
    }

    next.addEventListener("click", () => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage(index);
    });

    prev.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        showImage(index);
    });
});
const videos = document.querySelectorAll('.vid');

videos.forEach(video => {
    video.addEventListener('play', () => {

        videos.forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });

    });
});



const questions = [
    "Película favorita",
    "Segundo nombre",
    "Color favorito",
    "Comida favorita",
    "Mayor virtud",
    "Momento feliz",
    "Mayor sueño por alcanzar",
    "Momento más difícil dentro de tu equipo",
    "¿Por qué te integraste al equipo?",
    "¿A quién admiras en el equipo y por qué?",
    "¿Cuál es tu principal meta a lograr con este equipo?",
    "¿Cuáles son tus estrategias para mantenerte firme en los objetivos del equipo?"
];

const clock = document.getElementById("clock");
const hand = document.getElementById("hand");
const questionBox = document.getElementById("question");

const colors = [
    "#ffd44d", "#ff6f61", "#49c5c9", "#a58bd3",
    "#ffd44d", "#49c5c9", "#ff6f61", "#a58bd3",
    "#49c5c9", "#ffd44d", "#a58bd3", "#5db7e8"
];

for (let i = 1; i <= 12; i++) {
    const angle = (i * 30 - 90) * Math.PI / 180;
    const radius = 120;
    const x = 150 + radius * Math.cos(angle);
    const y = 150 + radius * Math.sin(angle);

    const number = document.createElement("div");
    number.className = "number";
    number.id = "num" + i;
    number.textContent = i;
    number.style.left = x + "px";
    number.style.top = y + "px";
    number.style.background = colors[i - 1];

    clock.appendChild(number);
}

let currentRotation = 0;

function spinClock() {
    document.querySelectorAll(".number").forEach(n => {
        n.classList.remove("selected");
    });

    const selected = Math.floor(Math.random() * 12) + 1;
    const finalAngle = selected * 30;

    currentRotation += 1080 + finalAngle;

    hand.style.transform = `translate(-50%, -100%) rotate(${currentRotation}deg)`;

    questionBox.textContent = "Girando...";

    setTimeout(() => {
        document.getElementById("num" + selected).classList.add("selected");
        questionBox.textContent = questions[selected - 1];
    }, 2000);
} 