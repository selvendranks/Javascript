//A simple synchronous program to add and square numbers

function addAndSquare(num1, num2, option, square, cube) {

    if (option === 'square')
        return square(num1 + num2)

    else
        return cube(num1 + num2)

}

console.log(addAndSquare(4, 3, 'cube', (num3) => {
    return num3 ** 2
}, (num3) => {
    return num3 ** 3
}
))


