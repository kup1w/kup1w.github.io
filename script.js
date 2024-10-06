let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const gradients = [
    "linear-gradient(270deg, #3b012d, #42003a, #470049, #4a005a, #4b006b, #48007c, #3e0e77, #30115d, #230f43, #150a2b, #080413, #000000)",
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;

    if (index === 0) {
        circle.style.backgroundImage = "url('/nasabek/assets/images/ufo.png')";
        circle.style.backgroundSize = "cover";  
        circle.style.backgroundPosition = "center";  
        circle.style.backgroundColor = "transparent";  
        circle.style.zIndex = 1000;  
    } else {
        circle.style.backgroundImage = gradients[0];
        circle.style.backgroundSize = "150%";
        circle.style.backgroundPosition = `${(index / circles.length) * 100}% 0`; 
        circle.style.zIndex = 1;  
    }
    
    circle.style.borderRadius = "50%";  
    circle.style.position = "absolute";  
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        circle.style.zIndex = circles.length - index;  
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

function start() {
    window.location.href = "/dialogue/dia.html";  // Ссылка на новую страницу с тестом
  }
function startTest() {
    window.location.href = "/nasabek/test/test.html"; // Ссылка на новую страницу с тестом
  }
  function startGame() {
    window.location.href = "/dialogue/dia.html"; // Ссылка на новую страницу с тестом
  }
  function startExo() {
    window.location.href = "/site/work.html"; // Ссылка на новую страницу с тестом
  }