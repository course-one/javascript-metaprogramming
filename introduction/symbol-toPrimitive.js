class Employee {
    constructor( name, salary ) {
        this.name = name;
        this.salary = salary;
    }
}

// default JavaScript behaviour
const emp1 = new Employee( 'Ross', 100 );
console.log( 'default =>', emp1 / 10 );

/*------*/

// `toPrimitive` at the class level
Employee.prototype[ Symbol.toPrimitive ] = function() {
    return this.salary;
}

const emp2 = new Employee( 'Monica', 200 );
console.log( 'class-level =>', emp2 / 10 );

/*------*/

const emp3 = new Employee( 'Jack', 300 );

// normally this would be a bug (but toPrimitive's here)
Employee.prototype.valueOf = null;

// `toPrimitive` at the object level
emp3[ Symbol.toPrimitive ] = function() {
    return this.salary;
}

console.log( 'object-level =>', emp3 / 10 );