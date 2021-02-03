function obtenerFecha(){
    //obtener la fecha actual
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    console.log(fecha.getFullYear())

    //traigo los elementos html necesarios
    let pHoras = document.querySelector('#horas'),
        pMinutos= document.querySelector('#minutos'),
        pSegundos = document.querySelector('#segundos'),
        pDiaSemana = document.querySelector('#diaSemana'),
        pNumDia = document.querySelector('#numDia'),
        pMes = document.querySelector('#mes'),
        pAnio = document.querySelector('#anio');

    //asignar los valores necesarios

    let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves', 'Viernes', 'Sabado'];
    pDiaSemana.innerHTML = semana[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    pMes.innerHTML = meses[fecha.getMonth()];

    pAnio.innerHTML = fecha.getFullYear();

    //asigno los valores a la hora
    if(horas < 10){
        horas = '0' + horas;
    }

    if(minutos < 10){
        minutos = '0' + minutos;
    }
    if(segundos < 10){
        segundos = '0' + segundos;
    }



    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}

function cambiarColor(color){
    let section = document.getElementById('contenedorPrincipal');
    console.log(section);

    if(color == 'pink'){
        section.className = 'mt-5 w-75 pink'
    }

    if(color == 'green'){
        section.className = 'mt-5 w-75 green'
    }

    if(color == 'azul'){
        section.className = 'mt-5 w-75 blue'
    }

}

window.setInterval(obtenerFecha, 1000);

// window.setInterval(function (){
//     dfuiosduf
//     sjlidfjsidfjisd
//     isdjfoisjdf
//     jpsiodfo

// }, 300)