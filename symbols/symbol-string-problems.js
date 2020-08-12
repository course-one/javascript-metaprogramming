// create a new symbol
var sym = Symbol('salary');

// symbol as a property of an object
var person = {
    name: 'Ross',
    [ sym ]: 200,
    [ Symbol('age') ]: 21,
};

// convert `person` to JSON string
console.log( 'result/json ->', JSON.stringify( person ) );

// interpolate symbol as string
try {
    console.log( `salary key is -> ${ sym }` );
} catch( err ) {
    console.log( 'result/error ->', err );
}

// perform string concatenation
try {
    console.log( 'salary key is ->' + sym );
} catch( err ) {
    console.log( 'result/error ->', err );
}