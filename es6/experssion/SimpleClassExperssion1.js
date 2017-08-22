var Foo = class {
  constructor() {}
  bar() {
    return 'Hello World!';
  }
};

var instance = new Foo();
console.log(instance.bar()); // "Hello World!"
console.log(Foo.name); // "Foo"

//A class expression has a similar syntax to a class statement (declaration). However, with class expressions, you are able to 
//omit the class name ("binding identifier"), which you can't with class //statements. Additionally, class expressions allow you to redefine
//re-declare classes and don't throw any type errors like class declaration. The constructor property is optional
