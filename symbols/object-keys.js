// create a new symbol
var sym = Symbol('salary');

// symbol as a property of an object
var person = {
    name: 'Ross',
    [ sym ]: 200,
    [ Symbol('age') ]: 21,
};

// access normal property
console.log( 'person.name =>', person.name );
console.log( 'person["name"] =>', person[ "name" ] );

// access symbol property
console.log( 'person[sym] =>', person[ sym ] );

// assign new value
person[ sym ] = 300;
person[ Symbol('age') ] = 22; // oops

// delete property
delete person[ sym ];

// inspect object
console.log( 'person =>', person );

// not gonna happen dude
console.log(
    'person[ "Symbol(age)" ] =>',
    person[ "Symbol(age)" ]
);