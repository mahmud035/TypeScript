function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper('10'));
console.log(getUpper('pavel'));
function signUpUser(name, email, isPaid) {
    // console.log(`${name} ${email} ${isPaid}`);
}
console.log(signUpUser('pavel', 'pavel@gmail.com', false));
// provide default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // console.log(`${name} ${email} ${isPaid}`);
};
console.log(loginUser('pavel', 'pavel@gmail.com'));
