const  Shape = require('Shape.js');
class Reactangle extends Shape{
    constructor(id){
        super(id);
        this.id = id;
        console.log("Reactangle constructor");
    }



}
var r = new Reactangle();
r.id(10);