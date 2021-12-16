function introducirNumero() {
    datoNumeroUsuario = prompt("Que numero quieres introducir?")
    if (datoNumeroUsuario != Number(datoNumeroUsuario)) {
        alert("Solo se aceptan numeros")
    }else if(datoNumeroUsuario >= 10) {
        alert("Error - El valor introducido es demasiado alot, prueba un numero mas bajo")
    }else{
    valoresNumero.push(datoNumeroUsuario)
    }
}