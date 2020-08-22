require( 'reflect-metadata' );

// define a sample target with a custom prototype
var target = { name: 'Ross' };
var proto = { age: 21 };
Reflect.setPrototypeOf( target, proto );

// add metadata to `proto`
Reflect.defineMetadata( 'version', 1, proto );
Reflect.defineMetadata( 'is', 'number', proto, 'age' );

// get metadata
console.log( 'getMetadata: target(version) ->',
Reflect.getMetadata( 'version', target ) );
console.log( 'getMetadata: target.age(is) ->',
Reflect.getMetadata( 'is', target, 'age' ) );
console.log( 'getOwnMetadata: target(version) ->',
Reflect.getOwnMetadata( 'version', target ) );
console.log( 'getOwnMetadata: target.age(is) ->',
Reflect.getOwnMetadata( 'is', target, 'age' ) );

// check if metadata exists
console.log( 'hasMetadata: target(version) ->',
Reflect.hasMetadata( 'version', target ) );
console.log( 'hasMetadata: target.age(is) ->',
Reflect.hasMetadata( 'is', target, 'age' ) );
console.log( 'hasOwnMetadata: target(version) ->',
Reflect.hasOwnMetadata( 'version', target ) );
console.log( 'hasOwnMetadata: target.age(is) ->',
Reflect.hasOwnMetadata( 'is', target, 'age' ) );

// check for metadata keys
console.log( 'getMetadataKeys: target ->',
Reflect.getMetadataKeys( target ) );
console.log( 'getMetadataKeys: target.age ->',
Reflect.getMetadataKeys( target, 'age' ) );
console.log( 'getOwnMetadataKeys: target ->',
Reflect.getOwnMetadataKeys(  target ) );
console.log( 'getOwnMetadataKeys: target.age ->',
Reflect.getOwnMetadataKeys( target, 'age' ) );