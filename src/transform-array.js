module.exports = function transform(arr) {
    let newArr = [];

    if (!Array.isArray(arr)) {
        throw new Error('not an array');
    } else if (arr.length < 1) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            i++;
        } else if (arr[i] === "--discard-prev") {
            newArr.pop()
        } else if (arr[i] === "--double-next") {
            newArr.push(arr[i + 1])
        } else if (arr[i] === "--double-prev") {
            newArr.push(arr[i - 1])
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.filter(index => index !== undefined);;
};