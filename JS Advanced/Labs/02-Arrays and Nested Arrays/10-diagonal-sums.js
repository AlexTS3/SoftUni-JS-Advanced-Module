function diagonalSums(matrix) {

    const resNums = [];
    let sumNum = 0;

    for (let index = 0; index < matrix.length; index++) {
         let currentNum = matrix[index][index]   
         sumNum += currentNum
    }
    resNums.push(sumNum);
    sumNum = 0;
    let diagonalIndex = 0
    for (let i = matrix.length - 1; i >= 0; i--) {
        let nextNum = matrix[i][diagonalIndex];
        sumNum += nextNum;
        diagonalIndex++;
    }
    resNums.push(sumNum);
    console.log(resNums.join(' '));
}

diagonalSums([
    [20, 40],
    [10, 60]
]);
// 80 50
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);
// 99 25

// ?A square matrix of numbers comes as an array of strings, each string holding
//  numbers (space separated).? Write a function that finds the sum at the main 
//  and the secondary diagonals.
// The input comes as an array of arrays, containing number elements 
// (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space.
//  First print the sum at the main diagonal, then the sum at the secondary diagonal.
