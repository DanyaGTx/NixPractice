'use strict'
function remove(str, n) {
    return str.replace(/!/g, function (m0) {
        if (n > 0) {
            n--;
            return '';
        }
        return m0;
    });
}

console.log(remove('hello!!!',1));