function introducirLetra() {
    datoLetraUsuario = prompt("Que letras queires introducir?")
    if (datoLetraUsuario.length >= 5) {
        alert("No puede ser mayor que 4")
    }else{
    
    valoresLetra.push(datoLetraUsuario)
    }
}