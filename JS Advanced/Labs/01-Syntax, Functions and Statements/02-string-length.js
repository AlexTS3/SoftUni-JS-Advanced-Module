function stringLength(firstStr, secondStr, lastStr){

    let firstLength = firstStr.length;
    let secondLength = secondStr.length;
    let lastLength = lastStr.length;

    let totalLength = firstLength + secondLength + lastLength;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake')