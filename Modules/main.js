import { default as main } from "./library.js" // default function
main();
import { message, hello as us, test } from './library.js';  // We can rename hello as a us
console.log(message);
console.log(us("Rehan"));
let a = new test();
// if there is many function,method,classes in library file while importing its length will increase more than we use
import * as basic from './library.js';  // We can rename hello as a us
console.log(basic.message);
console.log(basic.hello("Rehan"));
let b = new basic.test();