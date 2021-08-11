function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2056;
const isMyLeapYear = isLeapYear(myYear);
console.log(isMyLeapYear);



function isYourYear(year) {
    if (yourYear % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const yourYear = 2100;
const leapYearmama = isYourYear(yourYear);
console.log('is your year leap year', leapYearmama);