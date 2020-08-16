// create a `target` for proxy
var target = {
    name: { fname: 'Ross', lname: 'Geller' },
    age: 21
};

// create a proxy
var proxy = new Proxy( target, {
    get: function( target, prop, receiver ) {
        console.log( `[handler.get: ${ prop }]` );

        const val = target[ prop ];
        return prop === 'name' ?
               `${ val.fname } ${ val.lname }` : val;
    },
    set: function( target, prop, val, receiver ) {
        console.log( `[handler.set: ${ prop }]` );
        
        if( prop === 'name' ) {
            const [ fname, lname ] = val.split(' ');
            target[ prop ] = { fname, lname };
        } else {
            target[ prop ] = val;
        }

        return true; // operation was successful
    }
} );

// perform some operation on the `target` using `proxy`
proxy.name = "Chandler Bing"; // set
proxy.age = 25; // set

console.log( 'target.name ->', proxy.name );  // get
console.log( 'target.age ->', proxy.age ); // get
console.log( '"age" in proxy ->', "age" in proxy );

console.log( '"target" ->', target );