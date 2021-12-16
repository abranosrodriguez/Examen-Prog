function piedra() {

if (numeroAleatorioMaquina >= 67) {
    alert("Ganas: Sacas piedra - Maquina tijera")
    victoriaUsuario++
    partidasJugadas++
}else if(numeroAleatorioMaquina <= 33) {
    alert("Empate")
    empate++
    partidasJugadas++
}else{
    alert("Gana la maquina")
    victoriaMaquina++
    partidasJugadas++
}
}