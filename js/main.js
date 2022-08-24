let usuario = "Aldana"
let contraseña = "1234"

for (i=0; i<3; i++) {

    let usuarioIngresado = prompt("Ingrese su usuario");
    let contraseñaIngresada = prompt("Ingrese su contraseña");

    if (usuarioIngresado == usuario && contraseña == contraseñaIngresada) {
        console.log("Ingreso exitoso")
        alert("Bienvenida " + usuario + "," + " has ingresado con éxito");
        validacion = true;
        break;
    }
    else if (usuarioIngresado !== usuario || contraseñaIngresada !== contraseña) {
            console.log("Usuario o contraseña incorrecto");
            alert("Usuario o contraseña incorrecto");
            validacion = false;
        }
    } 
if (validacion == false) {
    console.log("Superó el límite de intentos")
    alert("Superó el limite de intentos")
}

