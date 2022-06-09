//while loop
let i =0
while (i<10){
    console.log(i);
    i++;
}

//sum of n natural numbers

i =0;
let num = 10
let sum = 0;
while(i<=num){
    sum+=i;
    i++;
}
let total = (num*(num+1)/2)
console.log(`sum of n natural numbers: ${sum}:${total}`)

//for loop

for(let i=0 ; i<10;i++){
    console.log(i);
}


//do while
i=0;
do{
    console.log(`do ${i}`);
    i++;
}while(i<0)