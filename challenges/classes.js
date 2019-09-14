// 1. Copy and paste your prototype in here and refactor into class syntax.

            // const CuboidMaker = function(length, width, height){
            //     this.length = length;
            //     this.width = width;
            //     this.height = height;
            //   }
            // CuboidMaker.prototype.volume = function(){
            //     return this.length * this.height * this.width;
            //   }
            
            // CuboidMaker.prototype.surfaceArea = function(){
            // return 2 * (this.length * this.height + this.length * this.width + this.width * this.height);
            // }



class CuboidMaker {
        //I'll be utilizing an object for intialization
    constructor(dimensions){
        this.length = dimensions.length;
        this.height = dimensions.height;
        this.width = dimensions.width;
    }

    volume(){
        return this.length * this.height * this.width;
        }

    surfaceArea(){
        return 2 * (this.length * this.height + this.length * this.width + this.width * this.height);
        }
}


const testDimensions = {
    length: 4,
    height: 5,
    width: 5
}

const testCuboid = new CuboidMaker(testDimensions);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(testCuboid.volume()); // 100
console.log(testCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(dimensions){
        //Check if dimensions != cube
        if(dimensions.length !== dimensions.height || dimensions.length !== dimensions.width){
            throw new TypeError(`Objects of class CubeMaker must have equilateral dimensions for each side`);
        }
        super(dimensions);
    }

    // volume method may remain the same. Could also have defined it as: Math.pow(this.anySide, 3);

    surfaceArea(){
        return Math.pow(this.length, 2) * 6  //length arbitrarily picked, could have been any side
    }
}

const testCube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
});

console.log(testCube.volume()); // 125
console.log(testCube.surfaceArea()); // 150


//Made up additional stretch, check for attempts to create a cube without appropriate dimensions and throw typeError
const notACube = new CubeMaker({
    length: 5,
    width: 5,
    height: 3
}); // TypeError: Objects of class CubeMaker must have equilateral dimensions for each side