//Function declaration hoisting
//Function declarations in JavaScript are hoisting the function definition. You can use the function before you declared it:
hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}

//Note that function expressions are not hoisted:
//notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
