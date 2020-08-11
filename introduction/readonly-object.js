var ross = { name: 'Ross', salary: 200 };
var monica = { name: 'Monica', salary: 300 };
var joey = { name: 'Joey', salary: 50 };

/*--------*/

// mutate `ross`
ross.name = 'Jack';  // success
console.log( 'ross.name =>', ross.name );

/*--------*/

// make `name` property readonly
Object.defineProperty( monica, 'name', {
    writable: false
} );

// mutate `monica`
monica.name = 'Judy';  // invalid
console.log( 'monica.name =>', monica.name ); 

/*--------*/

// freeze `joey`
Object.freeze( joey );

// mutate `joey`
joey.name = 'Mary-Angela'; // invalid
console.log( 'joey.name =>', joey.name );