module.exports = function reverse (n) {
    let dataStr = n.toString();
    let num = '';

    let startIndex = dataStr[0] === '-' ? 1 : 0;

    for (let i = dataStr.length-1; i >= startIndex; i--) {
        num = num + dataStr[i];
    }

    return Number(num);
}
