
let usuario = "Aldana"
let contraseña = "1234"

for (i=0; i<3; i++) {
   usuarioIngresado= prompt ("Ingresa tu usuario");
   contraseñaIngresada = prompt ("Ingresa tu contraseña"); 
   
   if (usuario==usuarioIngresado && contraseña== contraseñaIngresada) {
    console.log("Ingreso exitoso");
    alert ("Bienvenida " + usuario  + "," + " has ingresado con éxito");
    break;
   } else if (usuario!=usuarioIngresado || contraseña!=contraseñaIngresada) {
    console.log("Usuario o contraseña incorrecta");
    alert ("Alguno de los datos es incorrecto");
   } 
}
validacion = false
if (validacion == false) {
    alert ("Superaste el límite de intentos");
}