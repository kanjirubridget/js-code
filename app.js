const Jonas = {
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