

function comparaTodo(jug1, jug2){
    const resultados = document.querySelector(".comparacion");
    if(jug1.promgoles == jug2.promgoles){
        const p0 = document.querySelector(".prom-goles")
        p0.textContent = "Ambos jugadores poseen el mismo promedio de goles con un valor de " + jug1.promgoles;
    }else if (jug1.promgoles < jug2.promgoles) {
        const p1 = document.querySelector(".prom-goles")
        p1.textContent = jug1.nombre + " posee el promedio de goles más bajo con: " + jug1.promgoles + " por detrás de " + jug2.nombre + " con: " + jug2.promgoles;
        resultados.append(p1);
    } else {
        const p2 = document.querySelector(".prom-goles")
        p2.textContent = jug1.nombre + " posee mayor promedio de goles con: " + jug1.promgoles + " por delante de " + jug2.nombre + " con: " + jug2.promgoles;
        resultados.append(p2);
    }

    if(jug1.promasistencia == jug2.promasistencia){
        const p03 = document.querySelector(".prom-asist")
        p03.textContent = "Ambos jugadores poseen el mismo promedio de asistencias con un valor de " + jug1.promasistencia;
    }else if (jug1.promasistencia < jug2.promasistencia) {
        const p3 = document.querySelector(".prom-asist")
        p3.textContent = jug1.nombre + " posee el promedio de asistencias más bajo con: " + jug1.promasistencia + " por detrás de " + jug2.nombre + " con: " + jug2.promasistencia;
        resultados.append(p3);
    } else {
        const p4 = document.querySelector(".prom-asist")
        p4.textContent = jug1.nombre + " posee mayor promedio de asistencias con: " + jug1.promasistencia + " por delante de " + jug2.nombre + " con: " + jug2.promasistencia;
        resultados.append(p4);
    }


    if(jug1.promocasiones == jug2.promocasiones){
        const p05 = document.querySelector(".prom-ocasiones")
        p05.textContent = "Ambos jugadores poseen el mismo promedio de ocasiones creadas con un valor de " + jug1.promocasiones;
    }else if (jug1.promocasiones < jug2.promocasiones) {
        const p5 = document.querySelector(".prom-ocasiones")
        p5.textContent = jug1.nombre + " posee el promedio de ocasiones creadas más bajo con: " + jug1.promocasiones + " por detrás de " + jug2.nombre + " con: " + jug2.promocasiones;
        resultados.append(p5);
    } else {
        const p6 = document.querySelector(".prom-ocasiones")
        p6.textContent = jug1.nombre + " posee mayor promedio de ocasiones creadas con: " + jug1.promocasiones + " por delante de " + jug2.nombre + " con: " + jug2.promocasiones;
        resultados.append(p6);
    }
}