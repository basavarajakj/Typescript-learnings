/*
  Sometimes you will have information about the type of a value that TypeScript can’t know about.

  For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
*/

const myElement = document.getElementById("elem") as HTMLElement

// const a ="name" as number;
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.