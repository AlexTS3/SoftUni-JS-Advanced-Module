function lastSequence(sequenceLength, elements) {

    let result = [1];

    for (let index = 0; index < sequenceLength - 1; index++) {
        let sum = 0;

        if(result.length - elements <= 0){
            for (const element of result) {
                sum += element;
            }
            result.push(sum);
        } else {
            for (let elIndex = result.length - elements; elIndex < result.length; elIndex++) {
                sum += result[elIndex];
            }
            result.push(sum);
        }
    }
    return result;

}

lastSequence(6, 3);
// [1, 1, 2, 4, 7, 13]
lastSequence(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]

// You are given two integers n and k. Write a JS function that generates
//  and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents
// the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.
