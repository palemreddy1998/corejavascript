fib(10);
function fib(element) {
    var f,f2=0;
    var f3=1;

    for(var i=0;i<element;i++){
        f1=f2;
        f2=f3;
        f3=f1+f2;
        console.log(f3);
    }
}