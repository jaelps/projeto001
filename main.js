function capturaDados() {
  var primNum = document.getElementById("n1").value;
  var segundNum = document.getElementById("n2").value;
  var operador = document.getElementById("minMenu").value;
  console.log(primNum);
  console.log(segundNum);
  console.log(operador);

  if (operador == "+") {
    result = primNum + segundNum;
    document.getElementById("resposta").innerHTML = result;
  } else if (operador == "-") {
    result = primNum - segundNum;
    document.getElementById("resposta").innerHTML = result;
  } else if (operador == "*") {
    result = primNum * segundNum;
    document.getElementById("resposta").innerHTML = result;
  } else if (operador == "/") {
    result = primNum / segundNum;
    document.getElementById("resposta").innerHTML = result;
  } else {
    document.getElementById("resposta").innerHTML = "Operação inválida";
  }
}
