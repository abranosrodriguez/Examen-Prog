function main() {
    /* 
        He usado variable globales ya que me parecia mas fácil, aparte que habia echo todo en el mismo documento y después fui separando
    */
    valor = prompt("Quieres jugar a piedra papel o tijera? SI | NO")
    valor = valor.toLowerCase()
    VictoriasJuego()
   if (valor == "si") {
    
    while (victoriaMaquina != 5 && victoriaUsuario != 5) {
        
        datoUsuario = prompt("1 -> Piedra \n 2 -> Papel \n 3 -> Tijera \n 4 -> Comprobar Resultados \n 5 -> Salir")
        numeroAleatorio()
        if (datoUsuario == 1) {
            piedra()
        }else if(datoUsuario == 2){
            papel()
        }else if (datoUsuario == 3) {
            tijera()
        }else if(datoUsuario == 4){
            alert("Datos: \nVictorias Usuario: " + victoriaUsuario + "\nVictoria Maquina: " +victoriaMaquina + "\nEmpates: " + empate 
            + "\nPartidas Jugadas: " + partidasJugadas)
        }else if(datoUsuario == 5){
            alert("Saliendo...")
            break
        }
        else{
            alert("Escoge una opcion") 
        }    
    }
    //console.log("Victorias Usuario: " + victoriaUsuario)
    //console.log("Victorias Maquina: " + victoriaMaquina)
   }else{
       alert("\nAdios...")
   } 
   if (victoriaMaquina == 5) {
       alert("\nPierdes, Gano la maquina")
   }else if (victoriaUsuario == 5){
       alert("\nFelicidades - Ganas !!")
   }
}
main()