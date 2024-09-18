//target attribute
function spawnTarget(w, h, bg, border, radius, position="absolute") {
target = document.getElementById('target');
target.style.width = w + 'px';
target.style.height = h + 'px';
target.style.border = border + 'px';
target.style.background = bg;
target.style.borderRadius = radius;
target.style.position = position;
}

//addiction function
function addictioner(n1, n2) {
    return n1 + n2;
}

//sottraction function
function sottractioner(n1, n2) {
    return n1 - n2;
}

//multiplication function 
function multiplicationer(n1, n2) {
    return n1 * n2;
}

//division function
function divisioner(n1, n2) {
    return n1 / n2;
}

//srand() function
function srand(n1, n2) {
    return Math.floor(Math.random() - n1 * n2);
}

//timer
function xtimer(d) {
    let delay = setInterval(() => {
    s -= 30;
    timer.innerHTML = "Seconds: " + s;
    if(s == -1) {
        clearInterval(delay);  
    }  
}, d);
}

//setx function;
function setx(n1, type) {
   return target.style.position = n1 + type;
}