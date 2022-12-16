var saborpizza = "quatro queijos"

if (saborpizza == "marguerita") {
    console.log("Pizza de Marguerita!");
} else if (saborpizza == "quatro queijos") {
    console.log("Pizza de Queijo!");
} else { (saborpizza == "frango com catupiry!")
    console.log ("A melhor de todas!")
}

function criatextopreco (item, preco) {
    return 'O item ' + item + ' Custa R$ ' + preco;
}

console.log (criatextopreco ('tomate',10));