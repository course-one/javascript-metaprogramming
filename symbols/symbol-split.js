// defines a matcher object for `split` operation
class Matcher {
    constructor( name, ends ) {
        this.name = name.toUpperCase();
        this.ends = ends;
    }

    // `String.prototype.split()` processor
    [ Symbol.split ]( text ) {
        const pattern = this.ends + this.name + this.ends;
        const matchIndex = text.indexOf( pattern );

        return [
            text.substring( 0, matchIndex ), 
            text.substring( matchIndex + pattern.length, text.length )
        ];
    }
}

// create a matcher to split at `__EMAIL__` pattern
const matcher = new Matcher( 'email', '__' );

/*------*/

// sample text
const text = 'Enter your email address here: __EMAIL__.';
console.log( text.split( matcher ) );