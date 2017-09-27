var sleep = require('sleep-promise');

function asyncFunc() {
    return new Promise(
        function (resolve, reject) {

            resolve(result);

            reject(error);
        });
}

asyncFunc()
    .then(result => { console.log('result->'+result) })
    .catch(error => { console.log('error->'+error)});

function ayncwithWait() {
    return new Promise(function sleep1(resolve,reject) {
       sleep(1000);
        resolve(result);

        reject(error);

    });

}
//ayncwithWait()
    //.then(result => console.log(result))
    //.catch(error => console.log(error));