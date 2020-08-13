// define a simple JavaScript object
var person = {
    name: 'Ross',
    salary: 200,
    age: 21,
};

// before: the `toString` call
console.log( `before: ${ person }` );

/*-------*/

// provide `Symbol.toStringTag` implementation
person[ Symbol.toStringTag ] = 'Person';

// after: the `toString` call
console.log( `after: ${ person }` );