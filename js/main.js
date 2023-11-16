const jugador1 = {
    nombre: "Lionel Messi",
    goles: 819,
    asistencias: 362,
    partidos: 1041,
    promgoles: 0.787,
    promasistencia: 0.348,
    promocasiones: 1.13,
    pais: "Argentina",
    club: "Inter de Miami",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    clave: "Messi",
}

const jugador2 = {
    nombre: "Cristiano Ronaldo",
    goles: 850,
    asistencias: 288,
    partidos: 1179,
    promgoles: 0.72,
    promasistencia: 0.244,
    promocasiones: 0.966,
    pais: "Portugal",
    club: "Al-Nassr",
    img: "https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg",
    clave: "Cristiano",
}

const jugador3 = {
    nombre: "Neymar Junior",
    goles: 376,
    asistencias: 235,
    partidos: 618,
    promgoles: 0.61,
    promasistencia: 0.38,
    promocasiones: 0.988,
    pais: "Brasil",
    club: "Al-Hilal",
    img: "https://pbs.twimg.com/media/E-5ZMtJXMAE40FL.jpg",
    clave: "Neymar",
}

localStorage.setItem("jugador1", JSON.stringify(jugador1));
localStorage.setItem("jugador2", JSON.stringify(jugador2));
localStorage.setItem("jugador3", JSON.stringify(jugador3));
localStorage.setItem("estado", "Auto");
cambiodetarjeta(localStorage.getItem("estado"));
localStorage.setItem("estadotarjeta", 1);
const jugadores = [jugador1, jugador2, jugador3];
let cantidadjugadoreslista = 3;
if(localStorage.getItem("ingreso")== "si"){
    for (i = 4; i <= (Number(localStorage.getItem("cantidadjugadores"))); i += 1) {

        const jugadorx = JSON.parse(localStorage.getItem("jugador" + i));
        jugadores.push(jugadorx)
    }

}


const jugador4 = {}

function promedio(variable, partidos) {
    let promediofinal = 0;
    promediofinal = Number(variable) / Number(partidos);

    return promediofinal;
}
function cambiodetarjeta(automanu){
    let jugadornumero = Number(localStorage.getItem("estadotarjeta"));
    if(automanu== "Manual"){
        const pasatarjeta = document.querySelector(".btn-primary");
        pasatarjeta.addEventListener("click", (evt) => {
            evt.preventDefault();
            if (jugadornumero + 1 >= jugadores.length) {
                jugadornumero = 0;
                localStorage.setItem("estadotarjeta", jugadornumero)
            } else {
                jugadornumero += 1;
                localStorage.setItem("estadotarjeta", jugadornumero)
            }
            const prueba3 = document.querySelector(".card-jugador")
            prueba3.textContent = (jugadores[jugadornumero].nombre);
            const prueba4 = document.querySelector(".card-gol")
            prueba4.textContent = ("Goles: " + jugadores[jugadornumero].goles);
            const prueba5 = document.querySelector(".card-asist")
            prueba5.textContent = ("Asistencias: " + jugadores[jugadornumero].asistencias);
            const prueba6 = document.querySelector(".card-jugado")
            prueba6.textContent = ("Partidos Jugados: " + jugadores[jugadornumero].partidos);
            const prueba7 = document.querySelector(".card-nacion")
            prueba7.textContent = ("Seleccion: " + jugadores[jugadornumero].pais);
            const prueba8 = document.querySelector(".card-club")
            prueba8.textContent = ("Club Actual: " + jugadores[jugadornumero].club);
            const prueba9 = document.querySelector(".img-tarj")
            prueba9.setAttribute("src", jugadores[jugadornumero].img)
        })
    }
    
    if(automanu== "Auto"){
        
        let tiempo = setInterval(()=>{
            if (jugadornumero + 1 >= jugadores.length) {
                jugadornumero = 0;
                localStorage.setItem("estadotarjeta", jugadornumero)
            } else {
                jugadornumero += 1;
                localStorage.setItem("estadotarjeta", jugadornumero)
            }
            const prueba3 = document.querySelector(".card-jugador")
            prueba3.textContent = (jugadores[jugadornumero].nombre);
            const prueba4 = document.querySelector(".card-gol")
            prueba4.textContent = ("Goles: " + jugadores[jugadornumero].goles);
            const prueba5 = document.querySelector(".card-asist")
            prueba5.textContent = ("Asistencias: " + jugadores[jugadornumero].asistencias);
            const prueba6 = document.querySelector(".card-jugado")
            prueba6.textContent = ("Partidos Jugados: " + jugadores[jugadornumero].partidos);
            const prueba7 = document.querySelector(".card-nacion")
            prueba7.textContent = ("Seleccion: " + jugadores[jugadornumero].pais);
            const prueba8 = document.querySelector(".card-club")
            prueba8.textContent = ("Club Actual: " + jugadores[jugadornumero].club);
            const prueba9 = document.querySelector(".img-tarj")
            prueba9.setAttribute("src", jugadores[jugadornumero].img)
            if(localStorage.getItem("estado") == "Manual")clearInterval(tiempo);
        }, 5000)
    }
}


const pasajugador = document.querySelector(".jugadoringresado");
pasajugador.addEventListener("click", (evt) => {
    Swal.fire({
        title: '¿Estás seguro de querer ingresar al jugador?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: `No agregar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Su jugador fue agregado!', '', 'success')
            jugador4.nombre = document.querySelector("#nombreJ").value;
            jugador4.goles = document.querySelector("#golesJ").value;
            jugador4.asistencias = document.querySelector("#asistJ").value;
            jugador4.partidos = document.querySelector("#partidosJ").value;
            jugador4.promgoles = promedio(jugador4.goles, jugador4.partidos);
            jugador4.promasistencia = promedio(jugador4.asistencias, jugador4.partidos);
            jugador4.promocasiones = promedio((Number(jugador4.goles) + Number(jugador4.asistencias)), jugador4.partidos);
            jugador4.img = "https://previews.123rf.com/images/kritchanut/kritchanut1410/kritchanut141000061/32813900-icono-del-hombre-de-negocios-con-signo-de-interrogaci%C3%B3n-como-una-cabeza-concepto-sospechoso.jpg"
            jugador4.pais = "Argentina"
            jugador4.club = "Velez Sarsfield"
            jugador4.clave = jugador4.nombre,
            localStorage.setItem("ingreso", "si");
            cantidadjugadoreslista +=1;
            localStorage.setItem("cantidadjugadores", cantidadjugadoreslista);
            localStorage.setItem("jugador" + (jugadores.length + 1), JSON.stringify(jugador4));
            const jugadorx = JSON.parse(localStorage.getItem("jugador" + (jugadores.length + 1)));
            localStorage.setItem("cantidadjugadores", jugadores.length + 1)
            jugadores.push(jugadorx)
        } else if (result.isDenied) {
            Swal.fire('No agregamos a su jugador', '', 'info')
        }
    })
    evt.preventDefault();

}
)

const comparacion2 = document.querySelector(".jugadoresingresados");
comparacion2.addEventListener("click", (evt) => {
    evt.preventDefault();
    let aux1 = false;
    let aux2 = false;
    let jugnumero1 = 0;
    let jugnumero2 = 0;
    let nombrej1 = document.querySelector("#nombreJ1").value.toLowerCase();
    let nombrej2 = document.querySelector("#nombreJ2").value.toLowerCase();
    for (i = 0; i < jugadores.length; i += 1) {
        if (nombrej1 == jugadores[i].clave.toLowerCase()) {
            aux1 = true;
            jugnumero1 = jugadores[i];
        }
        if (nombrej2 == jugadores[i].clave.toLowerCase()) {
            aux2 = true;
            jugnumero2 = jugadores[i];
        }
    }
    if (aux1 && aux2) {
        comparatodo(jugnumero1, jugnumero2);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No encontramos a los jugadores ingreesados'
        })
    }

})

const controlcard = document.querySelector(".btn2");
controlcard.addEventListener("click", (evt) => {
    evt.preventDefault();
    let estado = localStorage.getItem("estado")
    if(estado == "Auto"){
        localStorage.setItem("estado", "Manual")
        controlcard.textContent = "Ver jugadores automaticamente"
    }
    if(estado == "Manual"){
        localStorage.setItem("estado", "Auto")
        controlcard.textContent = "Ver jugadores manualmente"
    }
    cambiodetarjeta(localStorage.getItem("estado"));
})