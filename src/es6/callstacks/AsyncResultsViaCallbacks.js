var fs = require('fs');
//async
fs.readFile('CallStack1.js', { encoding: 'utf8' },
    function (text) { // success
        console.log(text);
    },
    function (error) { // failure

    });
console.log('after calling readFile');

//sync
var contents = fs.readFileSync('CallStack1.js', 'utf8');
console.log(contents);