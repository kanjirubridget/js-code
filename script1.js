let ageBridget = 20;
let ageAnn = 30;

const averageAge =(ageBridget+ageAnn)/2;
console.log(ageBridget, ageAnn, averageAge);

console.log(5/2);
console.log(5/2-4*3);

let markMass = 78
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

//const BMI = mass/(height**2);

const markBMI = 78/(1.69**2);
const johnBMI = 92/(1.95**2);

console.log(markBMI, johnBMI);
console.log(markBMI > johnBMI);

if(markBMI > johnBMI){
    'markBMI is higher than that of John';
}else{
    'markBMI is higher than that of John';
} 
const firstName = 'infinite';
const lastName = 'happiness';
const today = 2022;
const birthYear = 2000;
const job = 'developer';

const bridget = `I'm ${firstName} ${lastName} a ${today-birthYear} years old ${job}!`;
console.log(bridget);

const string = 'strings\n\
with\n\
multiple lines';

console.log(string)

/*const friend = 'Zaphenath';
const age = 22;
const friendJob = 'developer';

const myFriend = `${friend}, a ${age} year old ${friendJob}`;
console.log(myFriend);
*/
const daughter = 'happiness';
const daughterAge = 5;

const myDaughter = `${daughter}, a ${daughterAge} year old girl!`;
console.log(myDaughter);

//let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

const country = 'Portugal';
const continent = 'Europe';
const population = '11 million';
const language = 'Portuguese';

const description = `${country} is in ${continent}, and its ${population} speak ${language}`;
console.log(description);

const firstNumber = 1;
if(firstNumber > 0){
    console.log('It is a positive number')
}else{
    console.log('It is zero or a negative number')
}

const myAge = 22;
if(myAge<18){
    console.log('not elligible for driving in Kenya')
}else{
    console.log('elligible for driving in Kenya')
}
const friendAge = 12;
const currentYear = 2022;
if(friendAge >= 18){
    console.log('elligible for driving')
}else{
    console.log(`${currentYear-friendAge} years remaining for him to be elligible for driving`)
}

const number1 = 100;
const number2 = 200;

if(number1-number2 > -0){
    console.log('positive number')
}else{
    console.log('negative number')
}

const inputYear= '2022';
console.log(Number(inputYear))

const whichYear = 2000
console.log(String(birthYear));

console.log('I am' +21+ ' years old')
console.log('2'+'3'+'5')
console.log('3'-'1'+'5');
console.log('3'>'2');
console.log('2'*'3');
console.log('4'/'2');
console.log('4'>='5');

/*there are 5 falsy values.
NaN, Undefined, '', 0, Null.
*/

let yourNumber = 0;
if(yourNumber){
    console.log('your number is defined')
}else{
    console.log('your number is Undefined')
};

let height;

if(height > 10){
    console.log('height is greater than zero')
}
else{
    console.log('height is undefined');
}

console.log(parseInt('1')+1);

const age = 18
if(age===18) console.log('you just became an adult');


