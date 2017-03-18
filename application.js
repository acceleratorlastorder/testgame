document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");
    start();

});





function start() {

    loadElement();
   keymap();
};

function loadElement() {
    let cube = document.getElementById('cube');


    console.log(cube);


    console.log('element loaded');
    return;
}



function keymap() {
    let Xaxis = cube.offsetTop;
    let Yaxis = cube.offsetLeft;
    let velocity = 0;
    window.addEventListener("keydown", function(event) {
        if (event.defaultPrevented) {
            velocity = 0;
            return; // Do nothing if the event was already processed
        } else {
          diagonals(event, Xaxis, Yaxis, velocity);

            console.log("velocity", velocity);
            if (event.key == 'ArrowUp') {
if (event.key == 'ArrowLeft') {
console.log("shit");
}

console.log("event", event);
                cube.style.top = Xaxis-- + velocity + "px";
            }
            if (event.key == 'ArrowDown') {
                return cube.style.top = Xaxis++ + velocity++ + "px";
                console.log("fleche bas");

            }
            if (event.key == 'ArrowLeft') {
                cube.style.left = Yaxis-- + velocity + "px";
                console.log("fleche gauche");

            }
            if (event.key == 'ArrowRight') {
                cube.style.left = Yaxis++ + velocity + "px";
                console.log("fleche droite");

            }
            console.log("event", event);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
        velocity = 0;
    }, true);

}


/*
var keys = {
    length: 0
};

window.onkeydown = function(e) {
    if (!keys[e.keyCode]) {
        keys[e.keyCode] = true;
        keys.length++;
        document.body.innerHTML = "You are pressing " + keys.length + " keys at the same time." + keys;
        console.log(keys);
    }
}

window.onkeyup = function(e) {
    if (keys[e.keyCode]) {
        keys[e.keyCode] = false;
        if (keys.length) {
            keys.length--;
        }
        document.body.innerHTML = "You are pressing " + keys.length + " keys at the same time." + keys;
        console.log(keys);
    }
}

function clearKeys() {
    for (n in keys) {
        n = false
        console.log("lel");
    };
    keys.length = 0;
    document.body.innerHTML = "You are pressing " + 0 + " keys at the same time.";
}

document.body.innerHTML = "You are pressing 0 keys at the same time.";
window.onblur = clearKeys;

*/
function diagonals(event, Xaxis, Yaxis, velocity) {
    let arrowUsed = event.key;
    if (event.key == 'ArrowUp' && event.key == 'ArrowLeft') {
        console.log("double");
    }
    console.log("dans diagonals", event.key, "arrowUsed", arrowUsed);
}
