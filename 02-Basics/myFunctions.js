"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toFixed(num);
    return num + 2;
}
console.log(addTwo(5.4670));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper('bassu'));
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "Welcome " + name;
}
console.log(signUpUser("bassu", "bassu@learn.dev", false));
var getHello = function (s) {
    return "Hello welcome" + s;
};
var heros = ['Bassu', 'sham', 'Naresh', 'Rohini'];
var herosNames = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(herosNames);
