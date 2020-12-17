var rect = require("./rectangle");

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(rect);

console.log(person.firstName);

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  if (l <= 0 || b <= 0) {
    console.log(
      "Rectangle dimensions should be greater than zero:  l = " +
        l +
        ",  and b = " +
        b
    );
  } else {
    console.log("The area of the rectangle is " + rect.rect.area(l, b));
    console.log(
      "The perimeter of the rectangle is " + rect.rect.perimeter(l, b)
    );
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
