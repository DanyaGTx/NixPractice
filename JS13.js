'use strict'
function hexToDec(hex) {
    return hex.toLowerCase().split('').reduce( (result, ch) =>
        result * 16 + '0123456789abcdefgh'.indexOf(ch), 0);
}

console.log(hexToDec('a'));