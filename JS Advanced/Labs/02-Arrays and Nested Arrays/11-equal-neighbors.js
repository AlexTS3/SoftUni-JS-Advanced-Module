function equalNeighbors(matrix) {

    let total = 0;

    for (let index = 0; index < matrix.length; index++) {
        const currentArr = matrix[index];
        
            for (let inner = 0; inner < currentArr.length; inner++) {
                if (index + 1 < matrix.length) {
                    if (currentArr[inner] === matrix[index + 1][inner] || currentArr[inner] === currentArr[inner - 1]) {
                        total++;
                    }
                } else {
                    if(currentArr[inner] === currentArr[inner - 1]){
                        total++;
                    }
                }
            }

        
    }
    console.log(total);
}

    // equalNeighbors([
    //     ['2', '3', '4', '7', '0'],
    //     ['4', '0', '5', '3', '4'],
    //     ['2', '3', '5', '4', '2'],
    //     ['9', '8', '7', '5', '4']
    // ]);
    // 1 
    // equalNeighbors([
    //     ['test', 'yes', 'yo', 'ho'],
    //     ['well', 'done', 'yo', '6'],
    //     ['not', 'done', 'yet', '5']
    // ]);
    // 2
    equalNeighbors([
        [2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]
    ]);
// 5

// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.
