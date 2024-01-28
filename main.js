// My age variable - human years
var myAge = 44;

// Changing variable that represents the first 2 years of a dogs life
var earlyYears = 2;

earlyYears *= 10.5;
// console.log(earlyYears);


// myAge minus earlyYears variable
var laterYears = myAge -= earlyYears;
// console.log(laterYears);

laterYears *= 4;
// console.log(earlyYears);
// console.log(laterYears);

// Results of my age in dog years the early years subtracted from the later years variable.
var myAgeInDogYears = earlyYears += laterYears;
// console.log(myAgeInDogYears);


// Add my name as a string type and set it all to lower case assign to variable.
myName = 'CHER'.toLowerCase();
// console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);









