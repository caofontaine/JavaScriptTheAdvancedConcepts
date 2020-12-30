var human = {mortal: true}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true
