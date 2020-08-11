class Employee {
    constructor( name, salary ) {
        this.name = name;
        this.salary = salary;
    }
}

// introspection using `typeof` and `instanceof`
function coerce( value ) {
    if( typeof value === 'string' ) {
        return parseInt( value );
    } else if( typeof value === 'boolean' ) {
        return value === true ? 1 : 0;
    } else if( value instanceof Employee ) {
        return value.salary;
    } else {
        return value; // possibly `number`
    }
}

console.log( 1 + coerce( true ) );
console.log( 1 + coerce( 3 ) );
console.log( 1 + coerce( '20 items' ) );
console.log( 1 + coerce( new Employee( 'Ross', 100 ) ) );