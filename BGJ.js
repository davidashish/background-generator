var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var b = document.querySelector("body");
var h = document.querySelector("h3");
var r = document.querySelector("#ran");


function text() {
    h.textContent = b.style.background;
}

var BG = function () {
    b.style.background = "linear-gradient(to right," + c1.value + "," + c2.value + ")";
    text();
}

function random() {
    var l = "0123456789ABCDEF";
    var c = "#";
    for (var i = 0; i < 6; i++) {
        c += l[Math.floor(Math.random() * 16)];
    }
        return c;
}

function ranb() {
    c1.value = random();
    c2.value = random();
    BG();
}
ranb();
c1.addEventListener("input", BG);
c2.addEventListener("input", BG);
r.addEventListener("click",ranb);