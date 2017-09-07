class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'staticMethod';
    }
    prototypeMethod() {
        return 'prototypeMethod';
    }
}
const foo = new Foo(123);
console.log(foo.prototypeMethod());
console.log(Foo.staticMethod());