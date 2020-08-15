var person = {
    name: 'Ross',
    _salary: 200,
};

// add non-configurable property
Object.defineProperty( person, 'email', {
    value: 'a@b.com',
    configurable: false
} );

// add `getter` property
Object.defineProperty( person, 'salary', {
    get: function() { return this._salary; },
    configurable: true
} );

// add property on the prototype
Object.setPrototypeOf( person, { age: 21 } );

// function to delete a property using `Reflect`
const deleteProperty = ( target, key ) => {
    return Reflect.deleteProperty( person, key );
};

// delete some properties
console.log( 'name ->', deleteProperty( person, 'name' ) );
console.log( 'email ->', deleteProperty( person, 'email' ) );
console.log( 'salary ->', deleteProperty( person, 'salary' ) );
console.log( 'age ->', deleteProperty( person, 'age' ) );
console.log( 'none ->', deleteProperty( person, 'none' ) );

console.log( '\nperson ->', person );