//Datos de entrada
var habitacion = () => parseInt(document.getElementById("type").value);
var spa = () => parseInt(document.getElementById("spa").checked == true ? 20 : 0);
var ocupacion = () => (document.getElementById("ocupacion").value);
var noches = () => parseInt(document.getElementById("noches").value);
var parking = () =>  parseInt(document.getElementById("parking").value);

//Calculo del precio
//((tipo de habitacion + spa)*noches*ocupacion)+parking*10
function tarifa() {
  var precio =  ((habitacion() + spa())*noches()*ocupacion())+(parking()*10);
document.getElementById("resultado").value = precio + "€";//codigo ascii?
} 

//Opcional, mostrar el calculo mientras se rellenan los datos
document.body.onload = tarifa;
document.getElementById("formulario").addEventListener("change", tarifa);
