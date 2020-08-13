class Person {
    constructor( name, salary, age ) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }

    valueOf() {
        return this.salary;
    }

    toString() {
        return this.name;
    }
}

// create an instance (object) of `Person`
var person = new Person( 'Ross', 200, 21 );

// perform operations on person
console.log( 'person - 10 ->', person - 10 );
console.log(
    '`Hello ${ person }` ->', `Hello ${ person }`
);