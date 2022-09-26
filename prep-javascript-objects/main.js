const person = {
  firstName: 'Jared',
  lastName: 'Jenvey',
  hobby: 'Watching anime'
};

const fullName = person.firstName + ' ' + person.lastName;
person.job = 'Dishwasher';
person.previousJob = 'Student';

console.log(person);
console.log("This person's name is:", fullName);
console.log("This person's current job is:", person.job);
console.log("This person's previous job was:", person.previousJob);
console.log('The complete person object:', person);
