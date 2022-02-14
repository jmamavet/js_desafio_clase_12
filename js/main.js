let entradas = [];

if (JSON.parse(localStorage.getItem("Entradas")) != null) {
    localStorage.clear();
}

// Reseteo el formulario si el usuario hace click en Cancelar
$("#botonCancelar").click(resetearFormulario);

// Valido formulario al clickear Confirmar en el form
$("#formularioCompra").submit(validarFormulario);

// Genero tabla en el DOM para resumen de compra
$("#compra").append(`<h4 class="text-light">Tu compra:</h4>`);

$("#compra").append(`<table id="tabla" class="table table-striped table-dark">
                        <thead class="bg-dark">
                            <th>Cantidad</th>
                            <th>Fecha Del Recital</th>
                            <th>Ubicacion</th>
                            <th>Fecha De Entrega</th>
                            <th>Sub-Total</th>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>`);

// Funcion para validar el formulario y pasarle los valores validados a los objetos
function validarFormulario(e) {

    e.preventDefault();

    let cantidadDeEntradas = parseInt($("#cantidadEntradas").val());
    let opcionFechaRecital = $("#opcionesFechaRecital").val();
    let opcionUbicacion = $("#opcionesUbicacion").val();
    let opcionFechaRetiro = $("#opcionesFechaRetiro").val();

    if (!(cantidadDeEntradas > 0)) {
        $("#errorCantidadEntradas").text("Por favor ingresa un valor numerico mayor a 0");
    } else {
        $("#errorCantidadEntradas").text("");
    }

    if (opcionFechaRecital == "-1") {
        $("#errorFechaRecitalVacia").text("Por favor selecciona una fecha para el recital");
    } else {
        $("#errorFechaRecitalVacia").text("");
    }

    if (opcionUbicacion == "-1") {
        $("#errorUbicacionVacia").text("Por favor selecciona una ubicacion");
    } else {
        $("#errorUbicacionVacia").text("");
    }

    if (opcionFechaRetiro == "-1") {
        $("#errorFechaRetiroVacia").text("Por favor selecciona una fecha para retirar tu entrada");
    } else {
        $("#errorFechaRetiroVacia").text("");
    }

    if (cantidadDeEntradas > 0 && opcionFechaRecital != "-1" && opcionUbicacion != "-1" && opcionFechaRetiro != "-1") {
        let fechaRecitalSeleccionada = $("#opcionesFechaRecital option:selected").text();
        let ubicacionSeleccionada;
        ubicaciones.forEach((ubicacion) => {
            if ((ubicacion.nombre + ' - $' + ubicacion.precio) == $("#opcionesUbicacion option:selected").text()) {
                ubicacionSeleccionada = ubicacion;
            }
        });
        let fechaRetiroSeleccionada = $("#opcionesFechaRetiro option:selected").text();

        // Reseteo formulario y cierro el modal
        resetearFormulario();
        $('#modalEntradas').modal('hide');

        // Verifico si el local storage esta vacio, genero objeto entrada y lo pusheo al array
        if (JSON.parse(localStorage.getItem("Entradas")) != null) {
            entradas = JSON.parse(localStorage.getItem("Entradas"));
            let nuevaEntrada = new Entrada(fechaRecitalSeleccionada, ubicacionSeleccionada, fechaRetiroSeleccionada, cantidadDeEntradas);
            entradas.push(nuevaEntrada);
            localStorage.setItem("Entradas", JSON.stringify(entradas));
            generarFilasCompra(nuevaEntrada);
        } else {
            let nuevaEntrada = new Entrada(fechaRecitalSeleccionada, ubicacionSeleccionada, fechaRetiroSeleccionada, cantidadDeEntradas);
            entradas.push(nuevaEntrada);
            localStorage.setItem("Entradas", JSON.stringify(entradas));
            generarFilasCompra(nuevaEntrada);
        }

        return true;
    } else {
        return false;
    }
}

// Funcion para generar dinamicamente las filas en la tabla de compra en el DOM.
function generarFilasCompra(entrada) {

    $("tbody").append(`<tr>
                            <td>${entrada.cantidad}</td>
                            <td>${entrada.fechaRecital}</td>
                            <td>${entrada.ubicacion.nombre + ' - $' + entrada.ubicacion.precio}</td>
                            <td>${entrada.fechaRetiro}</td>
                            <td>${entrada.cantidad * entrada.ubicacion.precio}</td>
                        </tr>`)

    calcularTotal();
}

// Funcion para calcular el total de la compra
function calcularTotal() {
    let total = 0;
    let imprimirValores = JSON.parse(localStorage.getItem("Entradas"));

    imprimirValores.forEach(element => {
        total = total + element.cantidad * element.ubicacion.precio;
    })
    // Si es la primera entrada creo el Total, sino actualizo el Total
    if ($("#totalCompra").text() == "") {
        $("#totalCompra").append(`Total: ${total}`);
    } else {
        $("#totalCompra").text(`Total: ${total}`);
    }
}

// Funcion para resetear el formulario
function resetearFormulario() {
    $("#errorCantidadEntradas").text("");
    $("#errorFechaRecitalVacia").text("");
    $("#errorUbicacionVacia").text("");
    $("#errorFechaRetiroVacia").text("");
    formularioCompra.reset();
}

/*
// Funcion para manejar el stock de entradas
function calcularStock(fila, cantidadDeEntradas) {
    for (let i = 0; i < tablaStock.rows.length; i++) {
        if (tablaStock.rows[i].cells[0].innerHTML == fila.cells[1].innerHTML && tablaStock.rows[i].cells[1].innerHTML == fila.cells[2].innerHTML) {
            tablaStock.rows[i].cells[2].innerHTML = parseInt(tablaStock.rows[i].cells[2].innerHTML) - cantidadDeEntradas;
        }
    }
}
*/