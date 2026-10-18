
const razones = [
    "Tu sonrisa me alegra el día. 😊",
    "Esos ojitos tuyos que me encantan. 👀",
    "Tu forma de ser, tan única y especial.",
    "Cómo me tratas y me haces sentir.",
    "Lo bonita que eres por dentro y por fuera. 🌹",
    "Que seas loquita y me hagas reír tanto. 😂❤️",
    "Esos labios que no se me olvidan. 💋",
    "Cuando me miras y me pones nervioso. 🙈",
    "Cada vez que salimos y la pasamos bonito.",
    "Esa química tan linda que tenemos. ✨",
    "Nuestras bromas y todas nuestras locuras.",
    "Que contigo puedo ser yo mismo.",
    "Tus pequeños detalles que me encantan.",
    "Las ganas que tengo de seguir conociéndote.",
    "Cómo haces especial hasta un momento sencillo.",
    "Y todas las cosas bonitas que aún me faltan descubrir de ti. 💗"
];

const titulos = [
    "Tu sonrisa", "Tus ojos", "Tu forma de ser",
    "Cómo me tratas", "Lo bonita que eres",
    "Eres loquita", "Esos labios", "Cuando me miras",
    "Cuando salimos", "Nuestra química",
    "Nuestras bromas", "Puedo ser yo",
    "Tus detalles", "Conocerte más",
    "Momentos bonitos", "Y mucho más..."
];

const petalos = document.getElementById("petalos");
const mensaje = document.getElementById("mensaje");
const modal = document.getElementById("modal");

// Crear automáticamente los pétalos
razones.forEach((razon, i) => {
    const petalo = document.createElement("button");

    petalo.className = "petalo";
    petalo.textContent = titulos[i];

    petalo.style.setProperty(
        "--angulo",
        `${i * (360 / razones.length)}deg`
    );

    petalo.addEventListener("click", () => {
        mensaje.textContent = razon;
    });

    petalos.appendChild(petalo);
});

// Mensaje del centro
document.getElementById("centro").addEventListener("click", () => {
    mensaje.textContent =
        "Evelyn <3, me gustas muchísimo y quería preguntarte " +
        "de una manera especial... ¿quieres estar conmigo? 💗";
});

// Si responde que sí
document.getElementById("botonSi").addEventListener("click", () => {
    modal.classList.add("visible");
});

// Si necesita tiempo
const botonDespues = document.getElementById("botonDespues");

let contador = 0;

const mensajes = [
    "Tranquila, Evelyn, tómate tu tiempo. 💗",
    "Solo quería sacarte una sonrisita. 🌷",
    "Me puse nervioso haciendo esto, no te voy a mentir. 😂",
    "Aquí estará tu flor cuando quieras volver a verla. ❤️"
];

botonDespues.addEventListener("click", () => {
    mensaje.textContent = mensajes[contador % mensajes.length];
    contador++;
});

// Cerrar la sorpresa
document.getElementById("cerrar").addEventListener("click", () => {
    modal.classList.remove("visible");
});

// Cerrar también con Escape
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        modal.classList.remove("visible");
    }
});
