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
                cube.style.top = Xaxis++ + velocity + "px";
                console.log("fleche haut");
            }
            if (event.key == 'ArrowDown') {
                cube.style.top = Xaxis-- + velocity + "px";
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
