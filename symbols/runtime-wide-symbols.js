// create a new symbol
var sym = Symbol.for('salary');
console.log( "sym's description ->", sym.description );
console.log( "sym's key ->", Symbol.keyFor(sym) );

// check for equality
console.log(
    "Symbol.for('salary') === sym ->",
    Symbol.for('salary') === sym
);

// symbol as a property of an object
var person = {
    name: 'Ross',
    [ sym ]: 200,
    [ Symbol.for('age') ]: 21,
};

// access symbol property
console.log( 'person[sym] ->', person[ sym ] );
console.log(
    'person[Symbol.for("salary")] ->',
    person[ Symbol.for('salary') ]
);

// inspect object
console.log( 'person ->', person );

// working just fine
console.log(
    'person[Symbol.for("age")] ->',
    person[ Symbol.for('age') ]
);