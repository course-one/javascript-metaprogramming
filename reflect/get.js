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

// get property value of `person` using `Reflect.get`
console.log( 'name ->', Reflect.get( person, 'name' ) );
console.log( 'salary ->', Reflect.get( person, 'salary' ) );
console.log( 'age ->', Reflect.get( person, 'age' ) );
console.log( 'none ->', Reflect.get( person, 'none' ) );

// use a custom `receiver`
console.log( 'salary* ->', Reflect.get( person, 'salary', {
    _salary: 300,
} ) );