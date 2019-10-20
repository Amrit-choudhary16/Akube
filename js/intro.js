let c=document.getElementById('canvas-container1');
let width=c.width;
let height=c.height;
let cx=c.getContext('2d');
let total = width, acceleration = .03, size = width/total, occupation = width/total;
let repaintColor = 'rgba(0, 0, 0, .04)';
let colors = [],  dots = [], dotsVel = [];

let portion = 360/total;
for(let i = 0; i < total; ++i){
    colors[i] = portion * i;

    dots[i] = height;
    dotsVel[i] = 10;
}
function intro(){
    window.requestAnimationFrame(intro);
    cx.fillStyle = repaintColor;
    cx.fillRect(0, 0, width, height);
    for(let i = 0; i < total; ++i){
        let currentY = dots[i] - 1;
        dots[i] += dotsVel[i] += acceleration;
        cx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
        cx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);
        if(dots[i] > height && Math.random() < .01){
            dots[i] = dotsVel[i] = 0;
        }
    }
}
intro();
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}