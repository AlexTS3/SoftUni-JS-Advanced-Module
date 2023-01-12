function prevDay(year, month, day) {

    const nextDay = new Date(year, month - 1, day - 1);
    const newYear = nextDay.getFullYear();
    const newMonth = nextDay.getMonth() + 1;
    const newDay = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDay}`);
}

prevDay(2016, 9, 30);
// 2016-9-29
prevDay(2015, 5, 10);
// 2015-5-9

// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`
