//CONFIGURACION DE INICION
var operador = "sumar"; // se coloca el valor de sumar para que se agregue el primer input.
var acumulado = null;
// DATOS DE ENTRADA
var operando = () => parseInt(document.getElementById("operando").value);
// FUNCIONES
//FUNCION__OPERACIONES
var calculadora = {
  sumar: (acumulado, operando) => (acumulado += operando),
  restar: (acumulado, operando) => (acumulado -= operando),
  multiplicar: (acumulado, operando) => (acumulado *= operando),
  dividir: (acumulado, operando) => (acumulado /= operando),
};
//FUNCION__ACTUALIZACION DEL VALOR ACUMULADO
document.addEventListener("click", funcion);
//Esta función solo es lanzada si la ID clickada se encuentra dentro de calculadora. Y realiza cuatro tareas.
function funcion(evento) {
  if (evento.target.id in calculadora) {
    // primera parte. Se asegura de que el operando ha sido rellenado.
    if (isNaN(operando())) {
      operador = evento.target.id;
      alert(
        "Su resultado parcial es de " +
          acumulado +
          ". Debe introducir un número para realizar la operacion " +
          evento.target.id
      );
    } else {
      // segunda parte. Almacena el nuevo valor de acumulado.
      acumulado = calculadora[operador](acumulado, operando());
      //tercera parte. Almacena la nueva operación.
      operador = evento.target.id;
      //cuarta parte. Limpia el input de entrada y lo establece como foco.
      document.getElementById("operando").value = null;
      document.getElementById("operando").focus();
      document.getElementById("resultado").value = null; // limpia el resultado en caso haber mostrado ya algún calculo.
    }
  }
}
// DATOS DE SALIDA
document.getElementById("igual").addEventListener("click", mostrar);
//esta funcion cuenta con tres partes.
function mostrar() {
  //primera parte. Calcula el resultado.
  acumulado = calculadora[operador](acumulado, operando());
  //segunda parte. Muestra el mensaje de error o el resultado segun proceda.
  acumulado == "Infinity" || isNaN(acumulado)
    ? (document.getElementById("resultado").value = "error")
    : (document.getElementById("resultado").value = acumulado);
  // tercera parte. Devuelve la configuracion inicial.
  document.getElementById("operando").value = null;
  acumulado = null;
  operador = "sumar";
}
