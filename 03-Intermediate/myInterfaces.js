/*
  An interface declaration is another way to name an object type:
*/
function printCoordinates(pt) {
    console.log("The coordinate's of X ", pt.x);
    console.log("The coordinate's of Y ", pt.y);
}
printCoordinates({ x: 3, y: 4 });
;
var bear = function (an) {
    an.honey;
    an.name;
};
var bear1 = function (an1) {
    an1.honey;
    an1.name;
};
// type Window1 = {
//   title: string;
// }
// type Window1 = {
//   ts: string;
// }
// Error: Duplicate identifier 'Window1'
