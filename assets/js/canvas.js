// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2 - 80
};

const colors = [
    '#47acff',
    '#7ef1c5',
    '#F2E8C9',
];


// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});


// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Particle(x, y, radius, color) {
    const distance = randomIntFromRange(200, 1000);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.0008;
    this.distanceFromCenter = {
        x: distance,
        y: distance
    };
    this.prevDistanceFromCenter = {
        x: distance,
        y: distance
    };
    this.lastMouse = { x: x, y: y };

    this.update = () => {
        const lastPoint = { x: this.x, y: this.y };
        // Move points over time
        this.radians += this.velocity;

        // Drag effect
        // this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        // this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        // Circular Motion

        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter.x;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter.y;

        this.draw(lastPoint);
    };

    this.draw = () => {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = this.color;
        c.shadowBlur = 15;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
    };
}


// Implementation
let particles;
function init() {
    particles = [];

    for (let i = 0; i < 400; i++) {
        const radius = (Math.random() * 2);
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(8, 8, 8, 1)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
    });
}

init();
animate();