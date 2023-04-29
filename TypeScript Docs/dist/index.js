"use strict";
let helloWord = 'hello world';
const user = {
    name: 'John',
    id: 1,
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount('Murphy', 1);
function getLength(obj) {
    return obj.length;
}
