// defines a matcher object for `search` operation
class Matcher {
    constructor( name, ends ) {
        this.name = name.toUpperCase();
        this.ends = ends;
    }

    // `String.prototype.search()` processor
    [ Symbol.search ]( text ) {
        const pattern = this.ends + this.name + this.ends;
        return text.indexOf( pattern );
    }
}

// create a matcher to find index of `__EMAIL__` pattern
const matcher = new Matcher( 'email', '__' );

/*------*/

// sample text
const text = 'Enter your email address here: __EMAIL__ and provide an alternate email here: __EMAIL__';

console.log( text.search( matcher ) );