//function returning function

function myFunc(){
    function hello(){
        return 'hello world'
    }
    return hello
}

const func = myFunc()
console.log(func())