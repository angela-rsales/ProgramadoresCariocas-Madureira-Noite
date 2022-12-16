var peso = prompt ("Seu peso:");
var altura = prompt ("Sua altura:");

function calculo (peso,altura) {
    if (peso/(altura*2)<17) {
    return "muito abaixo do peso";
}
else if (peso/(altura*2) >=17 && (peso/(altura*2) <=18.49)){
    return "abaixo do peso";
}
else if (peso/(altura*2) >=18.50 && (peso/(altura*2) <=24.99))
{
    return "peso normal";
}
else if (peso/(altura*2) >=25 && (peso/(altura*2) <=29.99))
{
    return "acima do peso";
}
else if (peso/(altura*2) >=30 && (peso/(altura*2) <=34.99))
{
    return "obesidade I";
}

else if (peso/(altura*2) >=35 && (peso/(altura*2) <=39.99))
{
    return "obesidade II (severa)";
}
else {
    return "obesidade III (mórbida)";
}

}

console.log(calculo(peso,altura))