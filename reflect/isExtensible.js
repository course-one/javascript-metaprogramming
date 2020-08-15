var person = {
    name: 'Ross',
    salary: 200,
};

// check if `person` is extensible
console.log( 'before ->', Reflect.isExtensible( person ) );

// make `person` non-extensible
Object.preventExtensions( person );

// check if `person` is extensible
console.log( 'after ->', Reflect.isExtensible( person ) );

// person some tests
person.salary = 300; // update
delete person.name; // delete
person.age = 21; // add
console.log( 'person ->', person );