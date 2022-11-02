// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cylinder{
    constructor(radius , height){
        this.radius = radius
        this.height = height
    }

    getVolume(){
        return("Volume = ", (3.14*this.radius*this.radius*this.height).toFixed(4))
    }
}

const cylinder = new Cylinder(7,4)

console.log(cylinder.getVolume())