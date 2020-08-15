var email = Symbol( 'email' );
var person = {
    name: 'Ross',
    _salary: 200,
    [ email ]: 'a@b.com'
};

// add `getter` property
Object.defineProperty( person, 'salary', {
    get: function() { return this._salary; }
} );

// add property on the prototype
Object.setPrototypeOf( person, { age: 21 } );

// function to get property descriptor using `Reflect`
const getDescriptor = ( target, key ) => {
    return Reflect.getOwnPropertyDescriptor( person, key );
};

// get own property descriptors of `person`
console.log( 'name ->', getDescriptor( person, 'name' ) );
console.log( 'salary ->', getDescriptor( person, 'salary' ) );
console.log( 'email ->', getDescriptor( person, email ) );
console.log( 'age ->', getDescriptor( person, 'age' ) );
console.log( 'none ->', getDescriptor( person, 'none' ) );