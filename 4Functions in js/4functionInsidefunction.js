//function inside function

const app = () => {

    function hello(person) {
        return `happy birthday ${person}`
    }
    console.log(hello('peter'))

    const threeNumber = (a, b, c)=> {
        return a + b + c
    }

    const sum = threeNumber(3, 4, 5)
    console.log(sum)
}

app()