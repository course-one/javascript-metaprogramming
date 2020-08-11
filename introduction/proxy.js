// target object
var target = { name: 'Ross', salary: 200 };

// proxy wrapped around the `target`
var targetWithProxy = new Proxy(target, {
  get: function(target, prop){
    return prop === 'salary' ? target[prop] + 100 : null;
  }
});

// access `target` through proxy
console.log( 'proxy: ', targetWithProxy.salary ); // 300
console.log( 'proxy: ', targetWithProxy.name ); // null
console.log( 'proxy: ', targetWithProxy.missing ); // null

// access `target`
console.log( '\ntarget: ', target.salary ); // 200
console.log( 'target: ', target.name ); // 'Ross'
console.log( 'target: ', target.missing ); // undefined