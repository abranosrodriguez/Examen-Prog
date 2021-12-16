function papel() {
    if (numeroAleatorioMaquina <= 33) {
        alert("Ganas: Sacas Papel - Maquina piedra")
        victoriaUsuario++
        partidasJugadas++
    }else if(numeroAleatorioMaquina >= 67){
        alert("Gana la maquina")
        victoriaMaquina++
        partidasJugadas++
    }else{
        alert("Empate")
        empate++
        partidasJugadas++
    }
}