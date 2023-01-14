function oddPositions(numArr) {

    const resArr = [];

    for (let index = 0; index < numArr.length; index++) {
        
        if(index % 2 !== 0){
            resArr.unshift(numArr[index] * 2);
        }
    }

    return resArr.join(' ');

}

oddPositions([10, 15, 20, 25]);
// 50 30
oddPositions([3, 0, 10, 4, 7, 3]);
// 6 8 0

// You are given an array of numbers.Write a JS function
// that returns the elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line,
// separated by space.
