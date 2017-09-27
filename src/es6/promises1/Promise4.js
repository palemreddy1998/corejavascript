function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}
asyncFunc()
    .then(x => console.log('Result: '+x));



//asyncFunc() returns a Promise. Once the actual result 'DONE' of the asynchronous computation is ready, it is delivered via resolve() (line B), which is a parameter of the callback that starts in line A.
    //So what is a Promise?

    //Conceptually, invoking asyncFunc() is a blocking function call.
//A Promise is both a container for a value and an event emitter.