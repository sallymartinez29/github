function Encriptar() {
  const encriptar = document.getElementById("textoIngresar").value;

  const textoEntrada = encriptar
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "enter");
    document.getElementById("textoSalida").value = textoEntrada;

}

function Desencriptar() {
    const Desencriptar = document.getElementById("textoIngresar").value;

    const textoSalida = Desencriptar
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/enter/gi, "e");
      document.getElementById("textoSalida").value = textoSalida;

  }
  
