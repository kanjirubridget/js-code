//functions

function blogger(){
    console.log('my name is Bridget'
    )
}

blogger()
blogger()
blogger()

function myFavoriteJuice(oranges, mangoes){
    console.log(oranges, mangoes);
    const juice = `juice with ${oranges} oranges and ${mangoes} mangoes`
    return juice;
}

myFavoriteJuice(1,5);

const mangoJuice = myFavoriteJuice(1,5);
console.log(mangoJuice);

function addNumbers(number1, number2){
    console.log(number1, number2);
    const sum = number1 + number2
    return sum;
}
addNumbers(10,15);
const addition= addNumbers(10,15);
console.log(addition);

/*function calculateAge(birthYear){
    const age= 2022-birthYear
    return age
}
const birthYear = 2000;

const myAge = calculateAge(birthYear);
console.log(myAge);
*/

//fuction declaration
function calcAge1(birthYear){
    return 2037- birthYear
}
const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function(birthYear){
    return 2037-birthYear;
}
const age2=calcAge2(1991);
console.log(age1, age2);

function subtractNumbers(number1, number2){
    const substraction = number1- number2
    return substraction;
}
const difference = subtractNumbers(10, 15);
console.log(difference);

function yearsRemainingToRetirement(retirementAge, currentAge){
    const yearsRemaining = retirementAge- currentAge
    return yearsRemaining;
}
const yearsLeft = yearsRemainingToRetirement(65,51)
console.log(yearsLeft);

function getFruitPieces(fruit){
    return fruit*6;
}

function juiceBlender(mangoes, apples, pineapples){
const mangoPieces= getFruitPieces(mangoes)
const applePieces= getFruitPieces(apples)
const pineapplePieces= getFruitPieces(pineapples)

const juice1 = `juice with ${mangoes} mango pieces, ${apples} apple pieces and ${pineapples} pineapple pieces.`
return juice1;
}

const juiceBlend = juiceBlender(1,3,1);
console.log(juiceBlend);

function multiplyNumbers(number5, number6){
    const multiplication = number5*number6
    return multiplication;
}
const result = multiplyNumbers(2,3);
console.log(result);

function calcMarkMillerBMI(mass, height){
    const markBMI = mass/(height**2)
    return markBMI;
}
const MarkMillerBMI = calcMarkMillerBMI(78, 1.69)
console.log(MarkMillerBMI);

function calcJohnSmithBMI(mass, height){
    const JohnBMI = mass/(height**2)
    return JohnBMI;
}
const JohnSmithBMI = calcJohnSmithBMI(92, 1.95)
console.log(JohnSmithBMI);

/*function compareBMI(JohnSmithBMI, MarkMillerBMI){
    If JohnSmithBMI> MarkMillerBMI
        return('johnsmith is healthier than markmiller')
    else{
        return('markmiller is healthier than JSmith')
    }
}
*/

//arrow functions
const calcAge4 = birthYear=> 2022-birthYear;
const age4 = calcAge4(1991)
console.log(age4);

const yearsUntillRetirement = birthYear =>{
    const age = 2022-birthYear;
    const retirement = 65-age;
    return retirement;
}
console.log(yearsUntillRetirement(1991));

const yearsLefttoRetirement = (years, nickName)=>{
    
    return `${nickName} has ${years} years to retire`;
}
console.log(yearsLefttoRetirement(32, 'Jonas'));

//arrays

const friends = ['Zaph', 'Lucy', 'Edna']
console.log(friends);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-2]);
friends[2] = 'Alma'
console.log(friends);

const bridget = ['Bridget', 'Kanjiru', 21, friends]
console.log(bridget);

const firstName = 'Bridget'
const kanjiru = [firstName, 'Bridget', 'Happiness', friends]
console.log(kanjiru);

const calcAge = function(birthYear){
    return 2037-birthYear;
}
const years = [1990, 1991, 1992, 2010, 2018];

const age10 = calcAge(years[0])
const age11 = calcAge(years[1])
const age12 = calcAge(years[years.lenght-1]);
console.log(age10, age11, age12);

const ages = [calcAge(years[0]), calcAge(years[1]), (years[years.lenght-1])];
console.log(ages);

/*basic array operations
push
unshift
pop
shift
indexOf 
includes
*/

friends.push('makena');
console.log(friends);
friends.unshift('yvonne');
console.log(friends);
friends.pop()
console.log(friends);
friends.shift()
console.log(friends);
console.log(friends.indexOf('Lucy'));
console.log(friends.includes('Zaph'));

const developers = ['Bridget', 'Daniel', 'Sara'];
console.log(developers);
developers.push('Sandra')
console.log(developers);
developers.unshift('Sam');
console.log(developers);
developers.pop();
console.log(developers);
developers.shift()
console.log(developers);
console.log(developers.includes('Nadia'));
console.log(developers.indexOf('Daniel'));
developers.splice(1,1)
console.log(developers);

//objects

const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schettman',
    job: 'teacher',
    age: 2022-1991,
    country: 'Portugal'
}
console.log(Jonas);

console.log(Jonas.firstName);
console.log(Jonas['firstName']);

console.log(Jonas['job'])

const knowJonas = prompt('who is jonas?')

//Bracket notation deals with property and dot notation values