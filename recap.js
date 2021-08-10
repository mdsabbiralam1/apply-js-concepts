//variable
var time = '12.12pm';
var bookPrice = 154;
var whiteColor = false;

// array
var iteamPrice = [54, 84, 400, 560, 686, 78];
var partners = ['sajid', 'majid', 'rakib', 'shakib', 'biplop'];
var elementCount = partners.length;
console.log(elementCount);
var rakibIndex = partners.indexOf('rakib');
console.log(rakibIndex);
partners.push('mamun', 'dipjol');
partners.pop();
console.log(partners);

// conditonals

if (bookPrice < 150) {
    console.log('i will buy this book');
}
else {
    console.log('mama kisu discount den na...! apni na amar mama hon..!')
}


// loop

// while loop
var i = 0;
while (i < 15) {
    i++;
}
//for loop
for (i = 0; i < 15; i++);

//function
function isMoonUp() {
    if (time <= 19 && time >= 5) {
        return true;
    }
    else {
        return false;
    }
}
var moonS
tatus = isMoonUp()

// let const
// value of variable could changed
var eggPrice = 32;
var eggPrice = 35;
let eggPrice = 40;
//value of varianble not changed
var name = "lal e lal Mr. Helal"
const name = "lal e lal Mr. Helal"