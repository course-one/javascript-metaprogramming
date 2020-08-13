class Person {
    constructor( name ) {
        this.name = name;
    }

    static [ Symbol.hasInstance ] ( instance ) {
        return 'name' in instance;
    }
}

class Employee {
    constructor( name, salary ) {
        this.name = name;
        this.salary = salary;
    }
}

// get name of an `object` of the type `Person`
function getName( object ) {
    if( object instanceof Person ) {
        console.log( 'success ->', object.name );
    } else {
        console.log( 'error -> not a Person' );
    }
}

// create a `Person` object and get name
const person = new Person( 'Ross' );
getName( person );

// create an `Employee` object and get name
const employee = new Employee( 'Monica', 300 );
getName( employee ); // error