function makePromise( time ) {
    return new Promise( function( resolve ) {
        setTimeout(() => {
            resolve( `Resolved after: ${ time } ms.` );
        }, time );
    } );
}

var promises = [
    makePromise( 1000 ),
    makePromise( 800 ),
    makePromise( 2000 ),
    makePromise( 1500 ),
];

( async function() {
    for await ( let result of promises ) {
        console.log( 'result ->', result );
    }
} )();