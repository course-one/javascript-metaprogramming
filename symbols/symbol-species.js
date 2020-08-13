// declare custom Array class
class MyArray extends Array {
    square() {
        return this.map( i => i * i );
    }

    static get [ Symbol.species ]() {
        return Array;
    }
}

// `numbers` of type `MyArray`
const numbers = new MyArray( 3, 5 );
console.log( 'numbers ->', numbers );

// `squares` of type `Array`
const squares = numbers.square();
console.log( 'squares ->', squares );

// `cubes` of type `Array`
const cubes = numbers.map( i => i * i * i );
console.log( 'cubes ->', cubes );