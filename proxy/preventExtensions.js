// create a `target` for proxy
var target = {
    name: { fname: 'Ross', lname: 'Geller' },
    age: 21
};

// create a proxy
var proxy = new Proxy( target, {
    preventExtensions: function( target ) {
        console.log( `[handler.preventExtensions]` );
        Object.freeze( target );
        return true;
    }
} );

// prevent extensions
Object.preventExtensions( proxy );

// update property
proxy.age = 30;

// add new property
proxy.salary = 200;
target.salary = 200;

// log `target` object
console.log( '"target" ->', target );