/*
  An interface declaration is another way to name an object type:
*/

interface Point {
  x: number;
  y: number;
}

function printCoordinates (pt: Point) {
  console.log("The coordinate's of X ", pt.x);
  console.log("The coordinate's of Y ", pt.y); 
}

printCoordinates({x:3, y:4});

/*
 * DIFFERENCES
 */

/*
  extend the interface
  extending a type via intersections
*/

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean
};

const bear = (an:Bear) => {
  an.honey
  an.name
}

type Animal1 = {
  name: string;
}

type Bear1 = Animal1 & {
  honey: boolean
}

const bear1 = function(an1: Bear1) {
  an1.honey;
  an1.name;
}

/*
  Interface: can add new fields to existing interfaces
  type: A type cannot be changed after being created
*/

interface Window {
  title: string;
}

interface Window {
  ts: string;
}

// type Window1 = {
//   title: string;
// }

// type Window1 = {
//   ts: string;
// }

// Error: Duplicate identifier 'Window1'
