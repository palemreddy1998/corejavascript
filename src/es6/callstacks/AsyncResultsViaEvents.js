//Two common patterns for receiving results asynchronously are: events and callbacks.
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
var req = new XMLHttpRequest();
req.open('GET', 'https://github.com/');

req.send(); // Add request to task queue
req.onload = function () {
    console.log('onload')
    if (req.status == 200) {
        processData(req.response);
    } else {
        console.log('ERROR', req.statusText);
    }
};

function processData(response) {
    //console.log(response)
}

req.onerror = function () {
    console.log('Network Error');
};


