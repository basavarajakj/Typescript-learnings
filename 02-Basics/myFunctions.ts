function addTwo(num: number): number {
  num.toFixed(num);
  return num+2;
}

console.log(addTwo(5.4670));

function getUpper(val: string): string {
  return val.toUpperCase();
}

console.log(getUpper('bassu'));

function signUpUser(name: string, email: string, isPaid: boolean = false): string {
  return "Welcome " + name;
}

console.log(signUpUser("bassu", "bassu@learn.dev", false));

const getHello = (s: string):string => {
  return "Hello welcome" + s;
}

const heros = ['Bassu', 'sham', 'Naresh', 'Rohini'];

const herosNames = heros.map((hero): string => {
  return `hero is ${hero}`;
});

console.log(herosNames);
export {}