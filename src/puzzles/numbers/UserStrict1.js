// Example of strict mode
//"use strict";

catchThemAll();
function catchThemAll() {
    x = 3.14; // Error will be thrown
    return x * x;
}