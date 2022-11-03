// 9. Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.


class Circle{
    constructor(radius){
        this.radius = radius
    }

    getPerimeter(){
        return (2*3.14*this.radius)
    }

    getArea(){
        return (3.14*this.radius*this.radius)
    }
}

const circle = new Circle(+process.argv[2])
console.log(circle.getArea())