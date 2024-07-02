
class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    get_radius(){
        return `Radius is ${this.radius.toFixed(1)}`;
    }

    set_radius(radius){
        this.radius = radius;
        return `updated Radius is ${this.radius}`;
    }

    get_color(){
        return `Color is ${this.color}`;
    }

    set_color(color){
        this.color = color;
        return `updated Color is ${this.color}`;
    }

    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`; 
    }

    get_area(){
        return `Area of Circle is ${(Math.PI * this.radius * this.radius).toFixed(2)}`;
    }

    get_circumference(){
        return `Area of Circumference is ${(2 * Math.PI * this.radius).toFixed(2)}`;
    }

}

var a = new Circle(1.0, "red");
console.log(a.toString());

console.log(a.get_radius());

console.log(a.set_radius(3.4));

console.log(a.get_color());

console.log(a.set_color("black"));

console.log(a.get_area());

console.log(a.get_circumference());



/*
Circle[radius=1,color=red]
Radius is 1.0
updated Radius is 3.4
Color is red
updated Color is black
Area of Circle is 36.32
Area of Circumference is 21.36
 */



