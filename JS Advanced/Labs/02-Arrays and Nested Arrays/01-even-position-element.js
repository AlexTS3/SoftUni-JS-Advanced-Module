function even(numArr) {

    let finalStr = '';
    for (let i = 0; i < numArr.length; i++) {

        if (i % 2 == 0){
            finalStr += numArr[i] + ' ';
        }
    }

    console.log(finalStr);
}

even(['20', '30', '40', '50', '60']);
// 20 40 60
even(['5', '10'])
// 5


// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.
