//npm install lodash
import { Spaceship } from './export'
import * as _ from "lodash"

interface AttackSpaceship extends Spaceship {
    weapons: number
}

let xwing: AttackSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
}

console.log(_.camelCase(xwing.name))
console.log(_.kebabCase(xwing.pilot))

//npx tsc index.ts
//node index.js