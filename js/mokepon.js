let ataqueJugador
let ataquePc
let result

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById ("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
}

function seleccionarMascotaJugador() {
    let inputJaco = document.getElementById("jaco")
    let inputOdin = document.getElementById("odin")
    let inputPeje = document.getElementById("peje")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


        if (inputJaco.checked == true){
        spanMascotaJugador.innerHTML = ("Jaco")
        }else if (inputOdin.checked == true){
        spanMascotaJugador.innerHTML = ("Odín")
        }else if (inputPeje.checked == true){
        spanMascotaJugador.innerHTML = ("Peje")
        }else {
        alert("Selecciona una Mascota por favor.")}

        seleccionarMascotaEnemigo ()
}
function seleccionarMascotaEnemigo () {
    let mascotaAleatorio= aleatorio (1,3)
    let spanMascotaEnemiga = document.getElementById("mascota-enemiga")


    if (mascotaAleatorio == 1){
        spanMascotaEnemiga.innerHTML = ("Jaco")
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemiga.innerHTML = ("Odín")
    }else {
        spanMascotaEnemiga.innerHTML = ("Peje")
    }

}

function ataqueFuego () {
    ataqueJugador = "FUEGO" 
    ataqueDePc ()
}function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueDePc ()
}function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueDePc ()
} 
    

function ataqueDePc (){
    let ataqueEnemigo = aleatorio (1,3)

    if ( ataqueEnemigo == 1 ){
        ataquePc = "FUEGO"
    }
    else if ( ataqueEnemigo == 2 ){
        ataquePc = "TIERRA"
    }
    else if ( ataqueEnemigo == 3 ){
        ataquePc = "AGUA"        
    }combate()
    crearMensaje()
    
}  //(1 fuego)-(2 tierra)-(3 agua)

function combate (){
    if ( ataqueJugador == ataquePc ){
        result = ("EMPATE😒")
    }
    else if ( ataqueJugador == "FUEGO" && ataquePc == "TIERRA" || ataqueJugador == "AGUA" && ataquePc == "FUEGO" || ataqueJugador == "TIERRA" && ataquePc == "AGUA" ){
        result = ("GANASTE🎉")
    }
    else {
        result = ("PERDISTE😢")
    }
}

function crearMensaje (){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ". Y la mascota enemiga atacó con " + ataquePc + ". " + result + "."

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor ( Math.random () * ( max - min + 1 ) + 1 )
}


window.addEventListener ("load", iniciarJuego)
