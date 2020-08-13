function makePromise( time, fav ) {
    return new Promise( function( resolve ) {
        setTimeout(() => {
            resolve( `${ fav }: ${ time } ms.` );
        }, time );
    } );
}

class Person {
    constructor( name, favs ) {
        this.name = name;
        this.favs = favs;
    }

    // implement async iterator protocol using a generator
    async *[ Symbol.asyncIterator ]() {
        for( let i in this.favs ) {
            yield await makePromise( i * 500, this.favs[ i ] );
        }
    }
}

const person = new Person( 'Ross', [
    'Monkeys', 'Museums', 'Rocks', 'Music'
] );

// iterate over `person` using `for-of` loop
( async () => {
    for await ( let item of person ) {
        console.log( 'item ->', item );
    }
} )();