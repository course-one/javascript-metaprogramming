// declare custom Array class
class MyArray extends Array {
    square() {
        return this.map( i => i * i );
    }
}

// `numbers` of type `MyArray`
const numbers = new MyArray( 3, 5 );
console.log( 'numbers ->', numbers );

// `squares` of type `MyArray`
const squares = numbers.square();
console.log( 'squares ->', squares );

// `cubes` of type `MyArray`
const cubes = numbers.map( i => i * i * i );
console.log( 'cubes ->', cubes );