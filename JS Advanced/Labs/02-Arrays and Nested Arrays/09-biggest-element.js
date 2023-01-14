function biggestEl(matrix) {

    let highestNum = 0;

    for(const arr of matrix){
        for(const num of arr){
            if(num > highestNum){
                highestNum = num;
            }
        }
    }

    console.log(highestNum);
    return highestNum;
}

biggestEl([
    [20, 50, 10],
    [8, 33, 145]
]);
// 145
biggestEl([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);
// 33


// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.
