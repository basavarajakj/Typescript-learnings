"use strict";
class User {
    constructor(email, name) {
        this.city = "kadur";
        this.email = email;
        this.name = name;
    }
}
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "kadur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return `count ${this._courseCount}`;
    }
    set setCourseCount(count) {
        this._courseCount = count;
    }
}
const bassu = new User("bs@b.com", "bassu");
// bassu.email;
// bassu.city = "mysore"
