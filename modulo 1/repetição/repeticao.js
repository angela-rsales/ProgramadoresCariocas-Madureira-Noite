function fizz (num) {
    var str = '';
    var i = 0;

    while (i <= num) {
        if (i % 3 == 0) {
            str += `fizz \n`
        } else {
            str += `${i} \n`
        }
        i++
}
    return str
}
    console.log (fizz(9))

function decrescente (num) {
    var str = '';

    while (num >= 0) {
        str += `${num} \n`
        num--
    }

    return str;
}

console.log (decrescente(10))