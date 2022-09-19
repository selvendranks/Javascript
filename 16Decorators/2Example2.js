//Example 2 multi function decorator
//Calculate rectange area

let rectangeArea = (length,width)=>{
    return length * width;
}

const parameters = (fn)=>{
    return (...args) => {
        if(args.length==2){
            return fn(...args)
        }
        else{
            return 'invalid parameters'
        }
    }
}

const result = (fn)=>{
    
        return(...args) =>{
          if(fn(...args)!=='invalid parameters')
            return `The area of rectangele is ${fn(...args)}`;
          else{
            return 'Can not compute area'
          }
        }
    
} 

rectangeArea = parameters(rectangeArea)
rectangeArea = result(rectangeArea)
console.log(rectangeArea(2,3))
console.log(rectangeArea(2,3,4))
