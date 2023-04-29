"use strict";
function detectType(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    return value + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        // NOTE: typeof array is 'object'
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
// The in operator narrowing
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
