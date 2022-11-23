///// (EXERCICIO CLASSE)

class Carro{
  constructor(roda,tanque, cor){
    this.roda = roda;
    this.tanque = tanque;
    this.cor = cor;
  }
}

const ferrari = new Carro(3, 100, "Robson");
console.log(`
~~Ferrari~~

Numero de Rodas: ${ferrari.roda}
Capacidade: ${ferrari.tanque}
Cor: ${ferrari.cor}
`)


/// (EXERCICIO CLASSE COM CANIL 23/11)

class Cachorro{
  constructor(nome,raca, porte){
    this.nome = nome;
    this.raca = raca;
    this.porte = porte;
  }
}

const nome = ["max", "mel", "zicao","pretinha"];
const porte = ["grande", "medio", "pequeno","enorme"];
const raca = ["labrador", "chihuahua", "viralata", "salsichao"];
let id = Number(prompt("qual seu cao?"));
let mensagem = prompt("digite sua mensagem");

const cao = new Cachorro(nome[id], raca[id], porte[id]);
console.log(`
~~FICHA~~

Nome: ${cao.nome}
Raca: ${cao.raca}
Porte: ${cao.porte}

${cao.nome}: ${mensagem}
`)

////(EXERCICIO TRATAMENTO DE ERRO 23/11)
class Cachorro{
  constructor(nome,raca, porte,animal){
    this.nome = nome;
    this.raca = raca;
    this.porte = porte;
    this.animal = animal;
  }
}

const nome = ["max", "mel", "zicao","pretinha"];
const porte = ["grande", "medio", "pequeno","enorme"];
const raca = ["labrador", "chihuahua", "viralata", "salsichao"];
const animal = ["lagarto", "cachorro", "gato", "besouro"]
let id = Number(prompt("qual seu cao?"));
let mensagem = prompt("digite sua mensagem");

const cao = new Cachorro(nome[id], raca[id], porte[id], animal[id]);
try {
  if(cao.animal != "cachorro") throw "não é um cachorro"
} catch (error) {
  alert(error);
}

console.log(`
~~FICHA~~

Nome: ${cao.nome}
Raca: ${cao.raca}
Porte: ${cao.porte}

${cao.nome}: ${mensagem}
`)



