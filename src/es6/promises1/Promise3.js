var promise1 = require('modulex-promise');

this.readFilePromisified('Users/palemreddy/MyLearning/corejavascript/package.json')
    .then(function (text) { // (A)
        const obj = JSON.parse(text);
        console.log(JSON.stringify(obj, null, 4));
    })
    .catch(function (error) { // (B)
        // File read error or JSON SyntaxError
        console.error('An error occurred', error);
    });