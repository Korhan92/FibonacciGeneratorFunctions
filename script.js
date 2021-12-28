let num = prompt ("0 dan büyük sayı giriniz.")
function fibonacciGen(num) {
    let array = [0, 1]
    if (num === 1) {
        return [0]
    } else {
        for (let i = 2; i <= num; i++) {
            array.push(array[array.length - 2] + array[array.length - 1])
            //[0,1,1,2,3,5]

        }
        return array
    }

}
console.log(fibonacciGen(num))

function fibonacciFinder(num) {
    const goldenRatio = 1.618034;
    //Math.pow :kuvvetini alır. math.sgrt karekokunu alır(console.log(Math.sqrt(5)) //5.232222)
    return  Math.round((Math.pow(goldenRatio, (num-1))-Math.pow((1-goldenRatio), (num-1)))/Math.sqrt(5));
}
console.log(fibonacciFinder(num))
console.log(Math.pow(4,2))

/*et number1 = 0;
console.log(number1);

let number2 = 1;
console.log(number2);

for (let i = 2; i <= 10; i++) {
    let nextNumber = number2 + number1;
    console.log(nextNumber);

    number1 = number2;
    number2 = nextNumber;
}

function findFibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return findFibonacci(n - 1) + findFibonacci(n - 2);
    }

}


console.log(findFibonacci(10));*/







