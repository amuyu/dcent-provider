/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */

var BigNumberLib = require('bignumber.js')

/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */

let BigNumber = BigNumberLib
BigNumber.prototype.multiply = BigNumberLib.prototype.times
BigNumber.prototype.mul = BigNumberLib.prototype.times
BigNumber.prototype.add = BigNumberLib.prototype.plus
BigNumber.prototype.sub = BigNumberLib.prototype.minus

/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */

export default BigNumber

/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */