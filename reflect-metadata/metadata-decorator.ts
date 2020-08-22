import 'reflect-metadata';

// define a custom decorator
function myDecorator( metaValue ) {
    return Reflect.metadata( 'returns', metaValue );
}

@Reflect.metadata( 'version', 1 )
class Person {
    fname: string;
    lname: string;

    constructor( fname, lname ) {
        this.fname = fname;
        this.lname = lname;
    }

    @myDecorator( { returns: 'string' } )
    getFullName() {
        return this.fname + ' ' + this.lname;
    }
}

// create an instance of Person
const person = new Person( 'Ross', 'Geller' );

// get metadata
console.log( 'Person(version) ->',
Reflect.getMetadata( 'version', Person ) );
console.log( 'person.getFullName(returns) ->',
Reflect.getMetadata( 'returns', person, 'getFullName' ) );