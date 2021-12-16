function main() {
    /* 
        He usado variable globales ya que me parecia mas fácil, aparte que habia echo todo en el mismo documento y después fui separando
    */
    valor = null
    valoresNumero = []
    valoresLetra = []
    while (valor != 4) {
        valor = prompt("Que quieres hacer?: \n 1 -> Introducir Numeros \n 2 -> Introducir Caracteres \n 3 -> Mostrar arrays \n 4 -> Salir")
        if(valor == 1){
            introducirNumero()
        }else if(valor == 2){
            introducirLetra()
        }else if(valor == 3){
            comprobarValores()
        }
    }
    console.log(valoresNumero)
    console.log(valoresLetra)
}
main()