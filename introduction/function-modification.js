function helloTwice( name ) {
    // override function implementation
    if( helloTwice.counter >= 2 ) {
        console.log( 'sorry!' );

        helloTwice = function() {
            console.log( 'sorry!' );
        }
    } else {
        // say hello
        console.log( 'Hello, ' + name + '.' );

        // increment the counter
        if( helloTwice.counter === undefined ) {
            helloTwice.counter = 1;
        } else {
            helloTwice.counter = helloTwice.counter + 1;
        }
    }
}

helloTwice( 'Ross' ); // success
helloTwice( 'Ross' ); // success
helloTwice( 'Ross' );
helloTwice( 'Ross' );