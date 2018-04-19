/**
 * @typedef {number|string} Numberlike - Number in *number* of *string*  <b>format</b>
 */

/**
 * Returns 100 either a number or a string
 *
 * @export foo()
 * @returns {Numberlike} 100 either as a number or a string
 */
export function foo() {
  if (Math.random() > 0.5) {
    return "100";
  } else {
    return 100;
  }
}

/**
 * @global
 * @typedef {Object}  StationVisit     - StationVisit complete station visit with date, notes and results
 * @property {string} id               - unique ID of sitevisit
 * @property {string} date             - date in 'YYYY-MM-DD'
 * @property {string} notes            - notes of the sitevisit
 * @property {Results}  results        - actual data gathered
 */
