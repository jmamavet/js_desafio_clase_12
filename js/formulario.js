// Genero en el DOM todas las opciones para la entrada tomando los valores de los arrays de fechas y objetos literales de ubicaciones

const fechasRecital = ['15/02/2022', '18/02/2022', '21/02/2022', '24/02/2022'];

const ubicaciones = [{ id: 1, nombre: 'General', precio: 1500 },
{ id: 2, nombre: 'Campo', precio: 4000 },
{ id: 3, nombre: 'Platea Oeste', precio: 6000 },
{ id: 4, nombre: 'Platea Este', precio: 6000 },
{ id: 5, nombre: 'Campo VIP', precio: 10000 }
];

const fechasRetiro = ['15/01/2022', '18/01/2022', '21/01/2022'];

$(document).ready(function () {
    fechasRecital.forEach((fecha, indice) => {
        $("#opcionesFechaRecital").append(`<option value="${indice}">${fecha}</option>`);
    });

    ubicaciones.forEach((ubicacion, indice) => {
        $("#opcionesUbicacion").append(`<option value="${indice}">${ubicacion.nombre} - $${ubicacion.precio}</option>`);
    });

    fechasRetiro.forEach((fecha, indice) => {
        $("#opcionesFechaRetiro").append(`<option value="${indice}">${fecha}</option>`);
    });
});