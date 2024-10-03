const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%~ ";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

// Function to draw the matrix
function drawMatrix() {
    ctx.fillStyle = "rgba(34, 38, 36, 0.2)"; // Black background with slight opacity
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgb(99, 139, 99)"; // Green characters
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrixCharacters.charAt(
            Math.floor(Math.random() * matrixCharacters.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop after it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Continuously redraw the matrix
setInterval(drawMatrix, 50);

// Resize the canvas when the window is resized
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
