"use strict";
class User {
    constructor(email, name) {
        this.city = '';
        this.email = email;
        this.name = name;
    }
}
const pavel = new User('pavel@.com', 'pavel');
console.log(pavel);
