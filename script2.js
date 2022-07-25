const age = 18;
if(age===18) console.log("you just became an adult")

const yourAge = '18'
if(yourAge=='18') console.log("you are now an adult");

/*const number= prompt("What's your favorite number?");

if(number===2){
    console.log("2 is an amazing number")
}else if(+number===4) {
    console.log("4 is also an amazing nummber")
} else {
    console.log("not an amazing number")
}

const myChildsAge = "3"
if(myChildsAge===3) console.log("wow, that's amazing");

const myHusband = prompt("what's your husband's name?");

if(myHusband===1){
    console.log("that's a beautiful name")
}else{
    console.log("he should get a new name")
}
console.log(typeof myHusband);
*/
console.log('18'!= 18);
console.log('18'== 18);

console.log("2"===2);
console.log("2"==2);

const hasGoodVisionVision = true;
const isOver18Years = false;
if(hasGoodVisionVision || isOver18Years){
    console.log("is elligible for driving")
}else{
    console.log("is not elligible for driving")
}
//||

if(!hasGoodVisionVision && isOver18Years){
    console.log("is not elligible for driving");
}else{
    console.log("is elligible for driving");
}

//switch statements can be used in place of if else staments.

const day = 'Monday';
switch(day){
    case 'Monday':
        console.log("code all day");
        break;
        case 'Tuesday':
        console.log('Practice coding');
        break;
        case 'Wednesday':
            console.log('Keep coding');
            break;
            case 'Thursday':
            console.log('take a break');
            break;
            case 'Friday':
            console.log("Revise what you have learnt");
            break;
            case 'Saturday':
            case 'Sunday':
console.log('make websites for clients');
break;
default:
    console.log('not a valid day'
    );
}
    const month = 'June';
    switch(month){
        case 'January':
            case 'February':
                console.log("beginning of the year");
                break;
                case 'March':
                case 'April':
                    case 'may':
                        case 'June':
                            console.log("first half of the year");
                            break;
                            case 'July':
                            case 'August':
                            case 'September':
                            case 'October':
                           console.log("second half of the year is over")
                           break;
                           case 'November':
                           case 'December':
                            console.log("End of the year");
                            break;
                            default:
                                console.log("not a valid month");
                            

    }
//review this
const DolphinsAverage = console.log((96+108+89)/3);
const KoalasAverage = console.log((88+91+100)/3);

if(DolphinsAverage === KoalasAverage){
    console.log('The two teams have a draw');
}if (DolphinsAverage > KoalasAverage) {
    console.log('Dolphins has won');
} else {
    console.log('Koalas has won');
}

const minimumScore = 100;
let DolphinsMean = 97.67;
let KoalasMean = 97.67;

if(DolphinsAverage>KoalasAverage && DolphinsMean>= 100){
    console.log('Dolphins has won');
}else{
    console.log('Dolphins has lost');
}

if(KoalasAverage>DolphinsAverage && KoalasAverage>=100){
    console.log('Koalas has won');
}else{
    console.log('Koalas has lost');
}

if(KoalasAverage<100 && DolphinsAverage<100) console.log('both teams have lost')

const a = 25
const b = 20;

console.log(a<10 || a===25);
console.log(b===20 && b>10);
console.log(b===20 && b<100);
console.log(a!==b);

const hisAge = 23;
age >= 18 ? console.log('He likes to drink wine'):
console.log('He likes to drink water');

const drink = hisAge >= 18? 'wine': 'water';

console.log(drink);
let drink2 
if(hisAge>=18){
    drink2='wine';
}else{
    drink2 = 'water';
}
console.log(drink2);
console.log(`He likes to drink ${age>=18 ?'wine' :'water'}`);

        


