// Genero tabla en el DOM para stock de entradas y guardo en Local Storage
/*
let stock = document.getElementById("stock");

let tablaStock = document.createElement("table");
tablaStock.setAttribute("class", "table table-striped table-dark");

let tablaStockHead = document.createElement("thead");
tablaStockHead.setAttribute("class", "bg-dark");

let headerStock0 = document.createElement("th");
headerStock0.innerHTML = "Fecha Recital";
let headerStock1 = document.createElement("th");
headerStock1.innerHTML = "Ubicacion";
let headerStock2 = document.createElement("th");
headerStock2.innerHTML = "Cantidad";

tablaStockHead.appendChild(headerStock0);
tablaStockHead.appendChild(headerStock1);
tablaStockHead.appendChild(headerStock2);

tablaStock.appendChild(tablaStockHead);

let tablaStockBody = document.createElement("tbody");
tablaStock.appendChild(tablaStockBody);
stock.appendChild(tablaStock);

//generarFilasStock(tiposEntrada);

function generarFilasStock(tiposEntrada) {
    tiposEntrada.forEach(element => {

        let filaStock = document.createElement("tr");
        filaStock.innerHTML = `<td>${element.fecha}</td>
                           <td>${element.ubicacion + ' - $' + element.precio}</td>
                           <td>${element.stock}</td>`;
        tablaStockBody.appendChild(filaStock);

    });
}

//const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto

// o almacenar array completo
//guardarLocal("listaProductos", JSON.stringify(productos));

*/