document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");
    start();

    window.addEventListener("keydown", function(event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        } else {

            console.log("event", event);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    }, true);
});





function start() {

    console.log("hey");

};
