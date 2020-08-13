// declare custom Array class
class MyArray extends Array {
    square() {
        return this.map( i => i * i );
    }
    
    // do not spread `MyArray` values in `concat`
    get [ Symbol.isConcatSpreadable ]() {
        return false;
    }
}

const numbers = new MyArray( 5, 33 );

// custom non-spreadable array
const drivers = [ "Seb", "Max" ];
drivers[ Symbol.isConcatSpreadable ] = false;

// simple arrays
const cars = [ "Ferrari", "RedBull" ];
const sports = [ "F1", "MotoGP" ];

// use concat
const newArray = cars.concat( sports, drivers, numbers );
console.log( newArray );