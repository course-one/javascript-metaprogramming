// define a simple JavaScript object
var person = {
    name: 'Ross',
    salary: 200,
    age: 21,
};

// arithmetic operation triggers `valueOf` method
console.log( 'before: person - 10 ->', person - 10 );

// string operation triggers `toString` method
console.log(
    'before: `Hello ${ person }` ->', `Hello ${ person }`
);

/*---------*/

// provide `valueOf` and `toString` implementation
person.valueOf = function() {
    return this.salary;
}
person.toString = function() {
    return this.name;
}

console.log( 'after: person - 10 ->', person - 10 );
console.log(
    'after: `Hello ${ person }` ->', `Hello ${ person }`
);