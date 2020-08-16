// create a `target` for proxy
var target = {
    name: 'Ross',
};

// create a proxy
var { proxy, revoke } = Proxy.revocable( target, {
    get: function( target, prop, receiver ) {
        return target[prop].toUpperCase();
    }
} );

// this executes the `get` trap
console.log( 'proxy.name ->', proxy.name );
// ✅ ROSS

// revoke proxy
revoke();

// this executes the `get` trap
console.log( 'proxy.name ->', proxy.name );
// ❌ TypeError: Cannot perform 'get' on a proxy that has been revoked

// this doesn't have a trap
console.log( '"name" in proxy ->', "name" in proxy );
// ❌ TypeError: Cannot perform 'has' on a proxy that has been revoked