/*const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schemtman',
    job: 'teacher',
    birthYear: 1991,
    friends:['Michael', 'Makena', 'Peter'],
   calcAge: function(){
    return 2037-this.birthYear
   },
   hasDriversLicense: true,
 getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} year old ${Jonas.job}, and he has ${this.hasDriversLicense? 'a' : 'no'} driver's license.`
 } 
};

console.log(Jonas);
console.log(Jonas.lastName);
console.log(Jonas['lastName']);
console.log(Jonas.calcAge());
console.log(this.Jonas);
console.log(this.calcAge);
console.log(Jonas.getSummary());
*/
const Markmiller = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return mass/(height**2)
    }
}
const Johnsmith = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return mass/(height**2)
    }
}

console.log(Markmiller);
console.log(Johnsmith);

console.log(Markmiller.calcBMI);
console.log(Johnsmith.calcBMI);

//loops
// the for loop keeps running as long as the statement is TRUE.

//console.log('lifting weight 1');
const exercise = 'lifting weight';
for(let exercise = 1; exercise<=10; ++exercise){
    console.log(`lifting weight ${exercise}`)
}

for(let rep = 5; rep<=10; ++rep){
    console.log(`I am journaling ${rep}`)
};

const myFriend = 'Edna';
const proffession = 'developer';
const herAge = 24

console.log(`I have a friend whose name is ${myFriend}, she is a ${herAge} year old ${proffession}`);

const Edna = {
    firstName: 'Edna',
    lastName: 'Amani',
    proffession: 'developer',
    friends: ['alma', 'jusper', 'hillary'],
    birthYear: 1998,
    hasDriversLicense: false,
    calcAge: function(){
        return 2022-this.birthYear
    }
   
}
console.log(Edna);
console.log(Edna.calcAge);

const jonnasArray = ['Jonnas', 'teacher', 'lecturer']
const types = []

for(let i = 0; i<4; ++i){
    console.log(jonnasArray[i]);
}
for(let i = 0; i<jonnasArray.length; ++i){
    console.log(jonnasArray[i]);
}
for(let i=0; i<jonnasArray.length; ++i){
    types.push(typeof[i])
}
console.log(types);
//loops start at zero(0)

const years = [1991, 2000, 2001, 2002]
const ages= []

for(let i=0; i<years.length;++i){
    ages.push(2037-years[i])
}
console.log(ages);

//break and continue
//Break eliminates all other elements after we find the element of a specific types.

//console.log(---ONLYNUMBERS---);

const kimani = ['Kim', 'Ben', 24, 1991, 'Maina']
for(let i=0; i<kimani.length; ++i){
    if(typeof kimani[i]==='number') break;
    console.log(kimani[i], typeof kimani[i]);  
};

const string= []
for(let i=0; i<kimani.length; ++i){
    if(typeof kimani[i]!=='string') continue;
    console.log(kimani[i], typeof kimani[i]);  
};

                                                                      