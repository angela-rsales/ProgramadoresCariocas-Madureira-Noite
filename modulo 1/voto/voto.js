var idade = prompt ();
console.log(verificarpermissoes(idade));

function verificarpermissoes (idade) {
    if (idade > 16 && idade < 18) {
        return "Pode votar e não pode dirigir"
    }
    else if (idade > 18) {
        return "Pode votar e pode dirigir"}
    else {
        return "Não pode votar e nem dirigir"
    }
}



function previsaorodagem (litros,kml) {
    litros=prompt('Digite aqui quantos litros');
    kml = prompt ('Digite aqui quantos km');

    var kmrodado = litros*kml;
    return kmrodado
}

console.log (previsaorodagem());

