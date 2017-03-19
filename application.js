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

            console.log("velocity", velocity);
            if (event.key == 'ArrowUp') {
                cube.style.top = Xaxis-- + velocity++ + "px";
                console.log("arrowUp: ", Xaxis, "velocity", velocity);
            }
            if (event.key == 'ArrowDown') {
                return cube.style.top = Xaxis++ + velocity++ + "px";
                  console.log("arrowDown: ", Xaxis, "velocity", velocity);

            }
            if (event.key == 'ArrowLeft') {
                cube.style.left = Yaxis-- + velocity++ + "px";
                console.log("arrowLeft: ", Yaxis, "velocity", velocity);

            }
            if (event.key == 'ArrowRight') {
                cube.style.left = Yaxis++ + velocity++ + "px";
                console.log("arrowRight: ", Yaxis, "velocity", velocity);

            }
            console.log("event: ", event);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
        velocity = 0;
    }, true);

}

var keys = {
    length: 0
};

window.onkeydown = function(e) {
    if (!keys[e.keyCode]) {
        keys[e.keyCode] = true;
        keys.length++;
        console.log("You are pressing " + keys.length + " keys at the same time." + keys);
        console.log(keys);
    }
}

window.onkeyup = function(e) {
    if (keys[e.keyCode]) {
        keys[e.keyCode] = false;
        if (keys.length) {
            keys.length--;
        }
        console.log("You are pressing " + keys.length + " keys at the same time." + keys);
        console.log(keys);
    }
}

function clearKeys() {
    console.log("lel");
    for (n in keys) {
        n = false
    };
    keys.length = 0;
    console.log("You are pressing " + 0 + " keys at the same time.");
}


function diagonals(event, Xaxis, Yaxis, velocity) {
    let arrowUsed = event.key;
    if (event.key == 'ArrowUp' && event.key == 'ArrowLeft') {
        console.log("double");
    }
    console.log("dans diagonals", event.key, "arrowUsed", arrowUsed);
}
