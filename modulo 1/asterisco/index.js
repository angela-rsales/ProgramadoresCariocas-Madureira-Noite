var convidadosIsa = ['Bruna', 'Leila', 'Erick']

convidadosIsa.push ('Angela', 'Paulo')

console.log (convidadosIsa)

var penetras = convidadosIsa.pop ()

console.log (convidadosIsa)
console.log (penetras)

var indice = 0;
while (indice<convidadosIsa.length) {
    console.log (convidadosIsa[indice]);
    indice ++;
}

convidadosIsa.splice (1,4)
console.log (convidadosIsa)

convidadosIsa [0] = 'Vex'
console.log (convidadosIsa)

convidadosIsa [1] = 'Thales'
console.log (convidadosIsa)
