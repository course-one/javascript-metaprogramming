require( 'reflect-metadata' );

// define a sample target
var target = { name: 'Ross', age: 21 };

// add metadata to `target` and `target.name`
Reflect.defineMetadata( 'version', 1, target );
Reflect.defineMetadata( 'is', 'string', target, 'name' );

// check if metadata exists
console.log( 'has: target(version) ->',
Reflect.hasMetadata( 'version', target ) );
console.log( 'has: target.name(is) ->',
Reflect.hasMetadata( 'is', target, 'name' ) );
console.log( 'has: target.age(is) ->',
Reflect.hasMetadata( 'is', target, 'age' ) );

// get metadata keys
console.log( 'keys: target ->',
Reflect.getMetadataKeys( target ) );
console.log( 'keys: target.name ->',
Reflect.getMetadataKeys( target, 'name' ) );
console.log( 'keys: target.age ->',
Reflect.getMetadataKeys( target, 'age' ) );

// delete metedata key
console.log( 'delete: target(version) ->',
Reflect.deleteMetadata( 'version', target ) );
console.log( 'delete: target.name(is) ->',
Reflect.deleteMetadata( 'is', target, 'name' ) );
console.log( 'delete: target.age(is) ->',
Reflect.deleteMetadata( 'is', target, 'age' ) );