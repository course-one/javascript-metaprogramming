var person = { name: 'Ross', _salary: 200 };

// add `accessor` property
Object.defineProperty( person, 'salary', {
    get: function() { return this._salary; },
    set: function( value ) {
        this._salary = value * value;
    }
} );

// update property value using `Reflect`
const updateProperty = ( key, value, receiver ) => {
    if( receiver ) {
        Reflect.set( person, key, value, receiver );
    } else {
        Reflect.set( person, key, value );
    }
};

// update property values
updateProperty( 'name', 'Monica' ); // update
updateProperty( 'age', 21 ); // create
updateProperty( 'salary', 20 ); // update

// see new state of the person object
console.log( 'person ->', person );

// use `receiver`
var receiver = {};
updateProperty( 'salary', 30, receiver );
console.log( 'receiver ->', receiver );
console.log( 'person* ->', person );