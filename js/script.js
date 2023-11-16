//funcion para el horario del primer div (Palma)
function updateTime() {
    let fechaObjetivo = new Date("2024-10-31T00:00:00").getTime();

    // Obtener la fecha actual y calcular la diferencia
    let fechaActual = new Date().getTime();
    let diferencia = fechaObjetivo - fechaActual;

  // Calcular días, horas, minutos y segundos
  let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar los elementos HTML con los IDs correspondientes
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Verificar si se alcanzó el final
    if (diferencia <= 0) {
    // Redirigir a final.html
        window.location.href = "final.html";
    }
}

//Actualizamos los relojs cada segundo
setInterval(updateTime, 1000);

//Y llamamos a nuestras funciones
updateTime();
