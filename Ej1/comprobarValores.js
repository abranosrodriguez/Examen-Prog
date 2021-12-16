function comprobarValores() {
    comprobacion = prompt("Que deseas comporbar: \n1 -> Numeros \n2 -> Letras")
    if (comprobacion == 1) {
        if (valoresNumero.length == 0) {
            alert("No contiene ningun dato de tipo numero \nInserte algun dato")
        }else{
            for(let i = 0; i < valoresNumero.length;i++){        
                alert("El numero es: " + valoresNumero[i] + "\nPosicion " + [i])
            } 
        }
    }else if(comprobacion == 2){
        if(valoresLetra.length == 0){
            alert("No contiene ningun dato de tipo caracter \nInserte algun dato")
        }else{
            for(let j = 0;j< valoresLetra.length;j++){
                alert("La letra es: " + valoresLetra[j] + " \nPosicion: " + [j])
            }
        }
        
    }else{
        alert("Error - Escoge una opcion")
    }
          

}