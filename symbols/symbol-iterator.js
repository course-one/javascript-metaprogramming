class Person {
    constructor( name, favs ) {
        this.name = name;
        this.favs = favs;
    }

    // implement iterator protocol using a generator
    *[ Symbol.iterator ]() {
        for( let i in this.favs ) {
            yield `${ this.name } likes ${ this.favs[ i ] }.`;
        }
    }
}

const person = new Person( 'Ross', [
    'Monkeys', 'Museums', 'Rocks', 'Music'
] );

// iterate over `person` using `for-of` loop
for( let item of person ) {
    console.log( 'item ->', item );
}

// iterate over `person` using spread operator
console.log( 'favs -> ', [ ...person ] );