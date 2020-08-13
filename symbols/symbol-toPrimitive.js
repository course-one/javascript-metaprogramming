// define a simple JavaScript object
var person = {
    name: 'Ross',
    salary: 200,
    age: 21,
};

// define `Symbol.toPrimitive` method
person[ Symbol.toPrimitive ] = function( hint ) {
    if( hint === 'number' ) {
        return this.salary;
    } else if( hint === 'string' ) {
        return this.name;
    } else {
        return 'person-default--';
    }
}

// demands a `number` primitive value
console.log( 'person - 10 ->', person - 10 );

// demands a `string` primitive value
console.log( `Hello ${person} ->`, `Hello ${person}` );

// demands a `default` primitive value
console.log( `person + true ->`, person + true );
console.log( `person + 1 ->`, person + 1 );
console.log( `person + '' ->`, person + '' );