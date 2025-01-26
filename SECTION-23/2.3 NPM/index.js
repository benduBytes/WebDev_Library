// var generateName = require('sillyname');

import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

const sillyName = generateName();
const name = randomSuperhero();

console.log("My Name is : ", sillyName);
console.log("My Favorite Super Hero : ", name);
