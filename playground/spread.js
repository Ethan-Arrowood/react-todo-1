// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Lina', 'Jimmy'];
// var groupB = ['Sam', 'Alex'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Ethan', 17];
var person2 = ['Lina', 18];
function greet(name, age) {
  return "Hi " + name + ", You are " + age + " years old."
}
console.log(greet(...person));
console.log(greet(...person2));

var names = ['Alex', 'PJ'];
var final = ['Ethan', ...names];
final.forEach(function (name) {
  console.log('Hi ' + name);
});
