var person = { name: 'Ross' };

// add `salary` property
console.log(
    'salary ->',
    Reflect.defineProperty( person, 'salary', {
        value: 200,
        writable: true,
        configurable: false, // can't configure after this
        enumerable: true,
    } )
);

// configure `name` property
console.log(
    'name ->',
    Reflect.defineProperty( person, 'name', {
        value: 'Monica',
        writable: false,
    } )
);

// configure `salary` property
console.log(
    'salary* ->',
    Reflect.defineProperty( person, 'salary', {
        configurable: true,
    } )
);

// see new state of the person object
console.log( 'person ->', person );