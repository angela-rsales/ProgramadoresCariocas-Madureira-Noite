const usuarios= [
    {nome: "julio", comidaFavorita:"batata", idade:18, saldo:1},
    {nome: "joao", comidaFavorita:"pipoca", idade:17, saldo:1},
    {nome: "maria", comidaFavorita:"batata", idade:25, saldo:1},
    {nome: "anya", comidaFavorita:"amendoim", idade:8, saldo:1},
    {nome: "carlos", comidaFavorita:"brocolis", idade:90, saldo:1},
    {nome: "roberto", comidaFavorita:"batata", idade:15, saldo:1},
]

const amantesDeBatata = usuarios.filter (comida=> comida.comidaFavorita == "batata"? true:false);

amantesDeBatata.forEach(x=>{console.log(`${x.nome} ama batata`)});

const maioresDeIdade = usuarios.filter (x=> x.idade >= 18? true:false);

maioresDeIdade.forEach(x=>{console.log(`${x.nome} pode beber`)});

for (let x of maioresDeIdade) {
    if (x.nome="maria") {
        console.log(`${x.nome} pode beber`);
    }
}

//  const gastos = [
// 112.46, //conta de luz
// 42.89, // conta de agua
// 799.00, // aluguel
// 428.90 //mercado
// ];

// const total = gastos.reduce ((acumulador, atual) => acumulador + atual); // exemplo material resília

const totalSaldos = usuarios.reduce((antigo, atual) => (antigo + atual.saldo),0);
console.log (totalSaldos)
