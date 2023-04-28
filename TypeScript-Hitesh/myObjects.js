var User = {
    name: 'John',
    email: 'john@gmail.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: '', isPaid: false, email: 'john@.com' };
createUser(newUser); // Should be given an Error Here.
// How to return an Object
function createCourse() {
    return {};
}
// How to return an Array
function createVideo() {
    return [];
}
