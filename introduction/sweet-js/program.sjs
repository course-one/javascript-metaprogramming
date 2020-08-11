// define a macro
syntax DEBUG_FUNC = function() {
  return #`console.log('A function was called.');`;
};

// sample functions
function func_a() {
  DEBUG_FUNC;
  console.log( 'I am result of the function "a".' );
}

function func_b() {
  DEBUG_FUNC;
  console.log( 'I am result of the function "b".' );
}

// call sample functions
func_a();
func_b();