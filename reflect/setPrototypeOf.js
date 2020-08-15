var person = {
    name: 'Ross',
    salary: 200,
};

// add property on the prototype using `Reflect`
Reflect.setPrototypeOf( person, {
    age: 21
} );

// get property value of `person` using `Reflect.get`
console.log( 'name ->', Reflect.get( person, 'name' ) );
console.log( 'salary ->', Reflect.get( person, 'salary' ) );
console.log( 'age ->', Reflect.get( person, 'age' ) );