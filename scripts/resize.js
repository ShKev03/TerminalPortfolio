const Window = document.getElementsByClassName("terminal-windows");
const Title = document.getElementsByClassName("title");

let offsetX, offsetY;

Title.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - Window.getBoundingClientRect().left;
    offsetY = e.clientY - Window.getBoundingClientRect().top;

    document.addEventListener("mousemove", moveBlock);
    document.addEventListener("mouseup", stopMoving);
});

function moveBlock(e) {
    Window.style.left = `${e.clientX - offsetX}px`;
    Window.style.top = `${e.clientY - offsetY}px`;
}

function stopMoving() {
    document.removeEventListener("mousemove", moveBlock);
    document.removeEventListener("mouseup", stopMoving);
}
