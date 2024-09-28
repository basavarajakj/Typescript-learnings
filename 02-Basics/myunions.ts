type User = {
  name: string;
  id: number;
}

type Admin = {
  userName: string;
  id: number;
}

let Bassu: User | Admin = {
  name: "Bassu",
  id: 34,
}

Bassu = {userName: 'bs', id: 334};


function printId(id: number | string) {

  if (typeof id === "string") {
    console.log(id.toLowerCase());
  }else {
    id+2;
  }
  
}

/*
  Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
*/

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}