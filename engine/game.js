const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 540;

const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

const penguin = {
    x: 150,
    y: 380,
    width: 50,
    height: 70,
    speed: 5
};

function update() {
    if (keys["ArrowLeft"]) {
        penguin.x -= penguin.speed;
    }

    if (keys["ArrowRight"]) {
        penguin.x += penguin.speed;
    }

    penguin.x = Math.max(
        0,
        Math.min(canvas.width - penguin.width, penguin.x)
    );
}

function draw() {
    // Sky
    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Snow
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 450, canvas.width, 90);

    // Penguin body
    ctx.fillStyle = "black";
    ctx.fillRect(
        penguin.x,
        penguin.y,
        penguin.width,
        penguin.height
    );

    // Belly
    ctx.fillStyle = "white";
    ctx.fillRect(
        penguin.x + 10,
        penguin.y + 10,
        30,
        45
    );

    // Eye
    ctx.fillStyle = "white";
    ctx.fillRect(
        penguin.x + 35,
        penguin.y + 10,
        5,
        5
    );

    // Beak
    ctx.fillStyle = "orange";
    ctx.fillRect(
        penguin.x + 45,
        penguin.y + 25,
        10,
        5
    );

    // Title
    ctx.fillStyle = "black";
    ctx.font = "28px Arial";
    ctx.fillText("Penguin Dash", 20, 40);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();