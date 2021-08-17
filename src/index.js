exports.min = function min(array=0) {
    if (array.length > 0) {
        return Math.min.apply(null, array);  
    }

    return 0;
};

exports.max = function max(array=0) {
    return array.length ? Math.max.apply(null, array) : 0;
};

exports.avg = function avg(array=0) {
    if (array.length > 0) {
        return array.reduce((a, b) => (a + b)) / array.length;
    }

    return 0;
};
