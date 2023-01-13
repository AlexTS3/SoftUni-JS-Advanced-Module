function sum(strArr) {

    const firstNum = Number(strArr.shift());
    const secondNum = Number(strArr.pop());

    return firstNum + secondNum;
}

sum(['20', '30', '40'])
//60
sum(['5', '10'])
//15



// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.
