function linhaAsterisco (num) {
    var str = '';
    for (var i = 0; i < num; i++) {
        str += `*`;
    }
    return str;
}

console.log (linhaAsterisco(10))

function trianguloAsteriscos (num) {
    var str = '';

    for (var i = 0; i < num; i++) {
        for (var j = 0; j <=i; j++) {
            str += `*`;
        }
        str += `\n`
    }
    return str
}

console.log (trianguloAsteriscos (10))