const lampada = {
  "cor": "amarela",
  "estado": false,
  "acender": function () {
    if (!this.estado) {
      this.estado = true;
      console.log("voce acendeu sua lampada")
    }else{
      console.log("a lampada ja esta acesa");
    }
    
  }
}

let teste = Number(prompt("a lampada esta acesa? 1 p/s e 2 p/n"));
if (teste == 1) {
  lampada.estado = true;
}else{
  lampada.estado = false;
}

lampada.acender();


//// EXERCICIO CANIL

const nome = ["max", "mel", "zicao","pretinha"];
const porte = ["grande", "medio", "pequeno","enorme"];
const raca = ["labrador", "chihuahua", "viralata", "salsichao"];
let id = Number(prompt("qual seu cao?"));
let mensagem = prompt("digite sua mensagem");


const canil = {
  "nome" : nome[id],
  "porte" : porte[id],
  "raca" : raca[id],
  "ficha" : function(){
    console.log(
    `
    Nome: ${this.nome}
    Porte: ${this.porte}
    Raca: ${this.raca}

    ${this.nome} : ${mensagem}

  
    `
  )
  }
}

canil.ficha();