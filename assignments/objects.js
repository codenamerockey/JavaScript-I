// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  id: 0,
  name: 'Example',
  email: 'examples@you.edu',
  gender: 'F'
};

// Write your intern objects here:
const mitzuIntern1 = {
  id: 0,
  firstName: 'Mitzu ',
  lastName: 'Melloy',
  email: 'mmelloy0@psu.edu',
  gender: 'F'
};

const kennanIntern2 = {
  id: 1,
  firstName: 'Kennan',
  lastName: 'Diben',
  email: 'Kdiben1@tinypic.com',
  gender: 'M',
  speak() {
    console.log(`Hello, my name is ${this.firstName}`);
  }
};

const kevenIntern3 = {
  id: 2,
  firstName: 'Keven',
  lastName: 'Mummery',
  email: 'kmummery2@wikimedia.org',
  gender: 'M'
};

const gannieIntern4 = {
  id: 3,
  firstName: 'Gannie',
  lastName: 'Martinson',
  email: 'gmartinson3@illinois.edu',
  gender: 'M'
};

const antoniettaIntern5 = {
  // 5,adaine5@samsung.com,Antonietta,F
  id: 3,
  firstName: 'Antonietta',
  lastName: 'Daine',
  email: 'adaine5@samsung.com',
  gender: 'F',
  multiplyNumbers(num1, num2) {
    return num1 * num2;
  }
};

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzuIntern1.firstName, mitzuIntern1.lastName);

// Kennan's ID
console.log(kennanIntern2.id);

// Keven's email
console.log(kevenIntern3.email);

// Gannie's name
console.log(gannieIntern4.firstName, gannieIntern4.lastName);

// Antonietta's Gender
console.log(antoniettaIntern5.gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(kennanIntern2.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(antoniettaIntern5.multiplyNumbers(3, 5));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: 70,
  speak() {
    console.log(`Hello my name is ${this.name}`);
  },
  childObject: {
    name: 'George',
    age: 50,
    speak() {
      console.log(`Hello my name is ${this.name}`);
    },
    grandchildObject: {
      name: 'Sam',
      age: 30,
      speak() {
        console.log(`Hello my name is ${this.name}`);
      }
    }
  }
};

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.childObject.age);
// Log the name and age of the grandchild
console.log(
  parent.childObject.grandchildObject.name,
  parent.childObject.grandchildObject.age
);
// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.childObject.speak());

// Have the grandchild speak
console.log(parent.childObject.grandchildObject.speak());
