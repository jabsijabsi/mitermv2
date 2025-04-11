function Shape (name, color) {
    this.name = name;
    this.color = color;
}

Shape.prototype.getInfo = function (name, color) {
    return `This is a ${name} and its color is ${color}`
};

function Circle(name, color, radius){
    Shape.call(this, name, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
    return (Math.PI * Math.pow(radius,2));
}
Circle.prototype.getInfo = function() {
    return `This is a ${name} and its color is ${color}. It has a radius of ${radius}`;
}

function Rectangle(name, color, width, height) {
    Shape.call(this,name,color);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
    return (width * height);
};

Rectangle.prototype.getInfo = function () {
    return `This is a ${name} and its color is ${color}. It has width ${width} and height ${height}`;
};


const circle = new Circle("circle", "red", 5);
const rectangle = new Rectangle("rectangle", "blue", 4, 6);



console.log(circle.getInfo());
// უნდა დაბეჭდოს: "This is a circle and its color is red. It has a radius of 5"

console.log(rectangle.getInfo());
// უნდა დაბეჭდოს: "This is a rectangle and its color is blue. It has width 4 and height 6"

console.log(circle.getArea());
// უნდა დაბეჭდოს: 78.53981633974483 (π * 5^2)

console.log(rectangle.getArea());
// უნდა დაბეჭდოს: 24 (4 * 6)