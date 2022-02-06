var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var numeroTentativas = document.getElementById("tentativas");

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou 🏆";
  } else if (document.getElementById("valor").value == "") {
    alert("Você precisa digitar um número de 0 a 10 ");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você precisa digitar um número de 0 a 10";
  } else if (tentativas > 0) {
    tentativas--;
    numeroTentativas.innerHTML = tentativas;
  }
  if (tentativas > chute) {
    elementoResultado.innerHTML =
      "O número secreto é maior<br>Tente novamente 🙃";
  } else if (tentativas < chute) {
    elementoResultado.innerHTML =
      "O número secreto é menor<br>Tente novamente 🙃";

    if (tentativas == 0) {
      elementoResultado.innerHTML =
        "Poxa, não foi dessa vez ☹️ <br> Suas tentativas acabaram e o numero secreto era " +
        numeroSecreto;
    }
  }
}