// create a new symbol
var sym = Symbol('salary');

// symbol as a property of an object
var person = {
    name: 'Ross',
    [ sym ]: 200,
    [ Symbol('age') ]: 21,
};

// check enumerable properties using `Object.keys`
console.log(
    'Object.keys() =>',
    Object.keys( person )
);

// check properties using `Object.getOwnPropertyNames`
console.log(
    'Object.getOwnPropertyNames() =>',
    Object.getOwnPropertyNames( person )
);

// check properties using `for-in` loop
for( let prop in person ) {
    console.log( 'for-in prop =>', prop );
}