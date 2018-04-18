/**
 * @typedef {number|string} Numberlike: Number in *number* of *string*  <b>format</b>
 */

/**
 * Secret
 * @namespace secret
 */
const secret = {
  /**
   * 50/50 it's a string
   *
   * @returns {Numberlike}
   */
  foo: function() {
    if (Math.random() > 0.5) {
      return "100";
    } else {
      return 100;
    }
  },
  /**
   * bar
   *
   * @param {string} title Your preferred title
   * @returns {string} elaborate title
   */
  bar: function(title) {
    return title + "bar";
  }
};

/**
 * @global
 * @typedef {Object}  StationVisit     - StationVisit complete station visit with date, notes and results
 * @property {string} id               - unique ID of sitevisit
 * @property {string} date             - date in 'YYYY-MM-DD'
 * @property {string} notes            - notes of the sitevisit
 * @property {Results}  results        - actual data gathered
 */
