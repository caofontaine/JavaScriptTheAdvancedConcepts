/*
  This recursive function creates a stack overflow. How can you fix this code
  by still keeping the recursive call around, but only adding something that
  you have learned in this section to not cause this stack overflow.
*/

//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        removeItemsFromList();
    }
};

removeItemsFromList();

/* SOLUTION */
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
      /*
        By adding setTimeout(), this allows the recursive calls to continue,
        but sit in the callback queue until the event loop is able to add it to
        the call stack (when empty)
      */
      setTimeout(removeItemsFromList, 0);
    }
};

removeItemsFromList();
