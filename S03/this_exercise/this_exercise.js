var b = {
  name: 'jay',
  say() {console.log(this)} // the object b
}

var c = {
  name: 'jay',
  say() {return function() {console.log(this)}}
  // the function, but calling the function returns the window object
  // a method that has a function inside of it, this is bound to window object,
  // unintended consequence of JS for dynamically scoped this
}

var d = {
  name: 'jay',
  say() {return () => console.log(this)}
  // the function, but calling the function returns the object d
  // this keyword lexically bound to d object in arrow function
}
