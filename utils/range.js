
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

function rand (min, max, excluded){
    if (min >= max) {
        throw Error(
            `minimum value (${min}) is larger than or equal to maximum value (${max})`
        );
    }

    const number = Math.floor(Math.random() * Math.floor(max - min + 1) + min);
    if (excluded.includes(number)) {
        console.log("ok")
        return rand(min, max, excluded);
    }

    return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
};

module.exports = {range, rand}