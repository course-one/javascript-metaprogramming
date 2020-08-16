class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
}

// hold singleton value of `Person`
var __person__ = null;

// create a proxy
var PersonProxy = new Proxy( Person, {
    construct: function( target, args, newTarget ) {
        console.log( `[handler.construct]` );
        
        if( __person__ === null ) {
            __person__ = Reflect.construct( ...arguments );
        }

        return __person__;
    }
} );

// construct `Person` instance
console.log( 'person[1] ->', new PersonProxy( 'Ross', 21 ) );

// construct another `Person` instance
console.log( 'person[2] ->', new PersonProxy( 'Monica', 21 ) );