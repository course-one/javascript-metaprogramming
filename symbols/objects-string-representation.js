// get string representation of a `value` using `toString` prototype method of the `Object`
function stringRepr( value ) {
    return Object.prototype.toString.call( value );
}

console.log( 'undefined ->', stringRepr( undefined ) );
console.log( 'null ->', stringRepr( null ) );
console.log( 'string ->', stringRepr( '' ) );
console.log( 'number ->', stringRepr( 1 ) );
console.log( 'boolean ->', stringRepr( true ) );
console.log( 'symbol ->', stringRepr( Symbol() ) );

console.log( '\nobject ->', stringRepr( {} ) );
console.log( 'function ->', stringRepr( function(){} ) );
console.log( 'array ->', stringRepr( [] ) );
console.log( 'Math ->', stringRepr( Math ) );
console.log( 'JSON ->', stringRepr( JSON ) );