var person = {
    name: 'Ross',
    _salary: 200,
    [ Symbol('email') ]: 'a@b.com'
};

// add `getter` property
Object.defineProperty( person, 'salary', {
    get: function() {
        return this._salary;
    }
} );

// add property on the prototype
Object.setPrototypeOf( person, {
    age: 21
} );

// get own properties of `person`
console.log( Reflect.ownKeys( person ) );