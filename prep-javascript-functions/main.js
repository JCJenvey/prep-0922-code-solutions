function addTwoNumbers(x, y) {
  return x + y;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

function addAndMultiplyByFive(x, y) {
  return (x + y) * 5;
}

function multplyAndDivideByFive(x, y) {
  return (x * y) / 5;
}

function subtractTwoNumbers(x, y) {
  return x - y;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function cube(n) {
  return n * n * n;
}

const sum = addTwoNumbers(4, 4);
console.log('sum', sum);

const hoursToMinutes = convertHoursToMinutes(2);
console.log('hours to minutes:', hoursToMinutes);

const greeting = getGreeting('Me');
console.log(greeting);

const multiplyOutput = addAndMultiplyByFive(10, 5);
console.log('Add and Multiply by five:', multiplyOutput);

const divideOutput = multplyAndDivideByFive(35, 10);
console.log('Multiply and Divide by five:', divideOutput);

const difference = subtractTwoNumbers(22, 7);
console.log('differnce:', difference);

const circumference = getCircleCircumference(5);
console.log('Circumference:', circumference);

const fullName = getFullName('Jared', 'Jenvey');
console.log('Full Name:', fullName);

const exponent = cube(5);
console.log('cube:', exponent);
