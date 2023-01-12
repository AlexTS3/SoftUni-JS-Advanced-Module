function upper(words){

    const regex = /[A-Za-z0-9]+/g;
    let res = words.match(regex);
    console.log(res.join(', ').toUpperCase());
}
//[A-Za-z0-9]+
upper('Hi, how are you?');
//HI, HOW, ARE, YOU
upper('hello');
//HELLO

//const upper = (words) => words.match(/[A-Za-z0-9]+/g).join(', ').toUpperCase();

//Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.
