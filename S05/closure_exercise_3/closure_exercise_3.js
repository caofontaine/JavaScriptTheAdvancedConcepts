// Make it so that it prints each value to array rather than just the last one.
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + array[i])
  }, 3000)
}

// MY SOLUTION
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  var currentI = i;
  new function() {
    setTimeout(function(){
      console.log('I am at index ' + array[i])
    }, 3000)
  }
}

// Course solutions
// Use let for i to create a block scope each time the loop iterates.
// Using var puts i in the global environment, changing it as setTimeout runs
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + array[i])
  }, 3000)
}


const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function(){
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}
