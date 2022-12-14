const usuarios= [
    {nome: "julio", comidaFavorita:"batata", idade:18},
    {nome: "joao", comidaFavorita:"pipoca", idade:17},
    {nome: "maria", comidaFavorita:"batata", idade:25},
    {nome: "anya", comidaFavorita:"amendoim", idade:8},
    {nome: "carlos", comidaFavorita:"brocolis", idade:90},
    {nome: "roberto", comidaFavorita:"batata", idade:15},
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