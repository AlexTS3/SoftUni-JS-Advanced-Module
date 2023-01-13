function smallestNums(numArr){

    const newNumArr = numArr.sort((a,b) => a - b)
    console.log(newNumArr[0] + ' ' + newNumArr[1]);
}

smallestNums([30, 15, 50, 5]);
// 5 15
smallestNums([3, 0, 10, 4, 7, 3]);
// 0 3

// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
