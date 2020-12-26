// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
function multiplyBy(num1) {
  return function (num2) {
    return num1 * num 2;
  }
}

const multiplyBy = (num1) => (num2) => num1 * num2;

// You should be able to do:
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4) // 8
