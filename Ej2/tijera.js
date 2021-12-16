function tijera() {
    if (numeroAleatorioMaquina <= 33) {
        alert("Gana la maquina")
        victoriaMaquina++
        partidasJugadas++
    }else if(numeroAleatorioMaquina >= 67){
        alert("Empate")
        empate++
        partidasJugadas++
    }else{
        alert("Ganas: Sacas Tijera - Maquina Papel")
        victoriaUsuario++
        partidasJugadas++
    }
}