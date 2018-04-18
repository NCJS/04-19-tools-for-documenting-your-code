/**
 * multiplies by 10
 *
 * @param {number} a a number
 * @returns {number} x10
 * @example test(20) = 200
 */
export function times10(a) {
  return a * 10;
}

/**
 *
 * constructs a Polygon
 *
 * @class Polygon
 */
class Polygon {
  /**
   * Creates an instance of Polygon.
   * @param {Number} height - height of Polygon
   * @param {Number} width - width of Polygon
   * @memberof Polygon
   */
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  /**
   * console.logs greeting
   *
   * @param {string} text - part of greeting
   * @memberof Polygon
   */
  sayName(text) {
    console.log("Hi, I am a ", this.name + ".");
  }

  /**
   * console.logs more info
   * @description lorem ipsum ....
   *
   * @memberof Polygon
   */
  sayHistory() {
    console.log(
      '"Polygon" is derived from the Greek polus (many) ' + "and gonia (angle)."
    );
  }
}
