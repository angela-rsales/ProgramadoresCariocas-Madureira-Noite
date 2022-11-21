const corpo = document.querySelector("body");
const abrir = document.createElement("button");
const fechar = document.createElement("button");
const mensagem = document.createElement("h1");

fechar.innerHTML = ("Fechar");
abrir.innerHTML = ("Abrir");

corpo.appendChild(fechar);
corpo.appendChild(abrir);
corpo.appendChild(mensagem);

abrir.onclick = function btn(){
  abrir.style.background = ("black");
  fechar.style.background = ("red");
  mensagem.innerHTML = (`Estamos abertos`)
}
fechar.onclick = function btn2(){
  abrir.style.background = ("green");
  fechar.style.background = ("black");
  mensagem.innerHTML = (`Estamos fechados`)
}

//

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