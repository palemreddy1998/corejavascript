var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
var bar = new Foo();
console.log(bar.whoIsThere()); // "NamedFoo"
//NamedFoo.name; // ReferenceError: NamedFoo is not defined
console.log(Foo.name); // "NamedFoo

//If you want to refer to the current class inside the class body, you can create a named class expression.
//This name is only visible inthe scope of the class expression itself.
