// create a new symbol
var sym = Symbol('salary');

// symbol as a property of an object
var person = {
    name: 'Ross',
    [ sym ]: 200,
    [ Symbol('age') ]: 21,
};

// get symbol properties using `getOwnPropertySymbols`
const symbols = Object.getOwnPropertySymbols( person );
console.log( 'symbols =>', symbols );

// find symbol that represents `age`
const ageSym = symbols.find( sym => {
    return sym.description &&
           sym.description.includes( 'age' );
} );

console.log( 'ageSym =>', ageSym );
console.log( 'person[ageSym] =>', person[ageSym] );