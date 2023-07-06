document.addEventListener("DOMContentLoaded", () => {

  //Botones de tabla de formulario
  document.querySelector("#btn-reset").addEventListener("click", reset);
  document.querySelector("#borrarUltimo").addEventListener("click", borrarUltimo);

  const form = document.querySelector("#formulario");


  let registros = [];

  // Captcha
  const captcha = document.getElementById("captcha");
  let captchas = ["EFG", "ABC", "JKL", "123", "54F"];
  let captchaLetras = captchas[Math.floor(Math.random() * captchas.length)];

  refrescarCaptcha();

  const refrescarBtn = document.getElementById("refrescar");
  refrescarBtn.addEventListener("click", refrescarCaptcha);


  const aviso = document.querySelector("#aviso");

  form.addEventListener("submit", e => {
    e.preventDefault()
    enviarForm()
  });

  function refrescarCaptcha() {
    while (captcha.innerText == captchaLetras) {
      captchaLetras = captchas[Math.floor(Math.random() * captchas.length)];
    }
    captcha.innerText = captchaLetras;
  }

  function validarCaptchaString(TXT) {
    return TXT == captchaLetras;
  }

  //"Envio" datos que cargo el usuario
  function enviarForm() {
    const formulario = new FormData(form);
    let nombre1 = formulario.get("nombre1");
    let nombre2 = formulario.get("nombre2");
    let fecha1 = formulario.get("fecha1");
    let fecha2 = formulario.get("fecha2");
    let categorias = formulario.get("categorias");
    console.log("nombrejug1: " + nombre1 + " nombrejug2: " + nombre2 + " fechajug1: " + fecha1 + " fechajug2: " + fecha2 + " categoria: " + categorias);

    //Valido el captcha
    if (validarCaptchaString(document.querySelector("#inputCaptcha").value)) {
      agregar(formulario);
      console.log("entra al if true");
      let nombre = formulario.get("nombre1");
      aviso.innerText = "Captcha Valido " + nombre + ", formulario enviado.";
    } else {
      console.log("entra al if false");
      aviso.innerText = "Captcha NO Valido, no se envio el formulario.";
    }

  }
  function crearObj(nombre1, fecha1, nombre2, fecha2) {
    return {
      nombre1: nombre1,
      fecha1: fecha1,
      nombre2: nombre2,
      fecha2: fecha2
    }
  }

  function agregar(formData) {
    let datos = crearObj(formData.get("nombre1"), formData.get("fecha1"), formData.get("nombre2"), formData.get("fecha2"));
    registros.push(datos)
    form.reset();
    mostrar();
    console.table(registros)
  }

  function hacerFila(obj) {

    let tableRow = '<tr>'

    for (const prop in obj) {
      tableRow += `<td>${obj[prop]}</td>`;
    }

    tableRow += '</td>';

    return tableRow;
  }

  function mostrar() {
    let tabla = document.querySelector("#inscriptos")
    let table = '<tr><th> Nombre jugador 1 </th><th>Fecha jugador 1</th><th>Nombre jugador 2</th> <th>Fecha jugador 2</th></tr>';

    registros.forEach(registro => {
      table += hacerFila(registro);
    });


    tabla.innerHTML = table;

  }

  function reset() {
    registros = [];
    mostrar();
  }

  function borrarUltimo() {
    registros.pop();
    mostrar();
  }
});