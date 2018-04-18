import _ from "lodash";
import * as ss from "simple-statistics";
import { test } from "./b";
import { sum, joinArr, dayInGerman } from "./a";

let con = _.concat([1], [3, 2, 4]);
console.log(con);

const avg = ss.average([1, 2, 3, 4, 5, 6, 7]);

const join = joinArr([1, 2, 3, 4], ["a", "b"]);

const times10 = test(20);

/**
 * Returns a simple greeting, default is 'Good Morning'
 *
 * @param {string} name  Name of a Person
 * @param {boolean} [evening=false]
 * @returns {string} greeting - nice greeting being returned
 */
function greeting(name, evening = false) {
  if (!evening) {
    return "Good Morning " + name;
  } else {
    return "Good Evening" + name;
  }
}
console.log(greeting("Andreas"));
