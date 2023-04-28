/*

const User = {
  name: 'John',
  email: 'john@gmail.com',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

const newUser = { name: '', isPaid: false, email: 'john@.com' };

createUser(newUser); // Should be given an Error Here.

// How to return an Object
function createCourse(): {} {
  return {};
}

// How to return an Array
function createVideo(): [] {
  return [];
}

*/
function createUser(user) {
    return { name: 'John', email: '', isActive: false };
}
createUser({ name: 'John', email: '', isActive: false });
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
