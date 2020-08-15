var person = {
    name: 'Ross',
    _salary: 200,
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

// check if an object has a property using `Reflect.get`
console.log( 'name ->', Reflect.has( person, 'name' ) );
console.log( 'salary ->', Reflect.has( person, 'salary' ) );
console.log( 'age ->', Reflect.has( person, 'age' ) );
console.log( 'none ->', Reflect.has( person, 'none' ) );