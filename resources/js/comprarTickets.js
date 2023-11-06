const BotonCalcular = document.getElementById("botonCalcular");

function calcularPrecio() {

    /*!
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    */

    let cantidadTickets = parseInt(document.getElementById('cantidadTickets').value);
    let categoria = parseInt(document.getElementById('categorias').value);
    let precioTicket = 200;
    let descuento = 0;
    let montoTotal = 0;

    switch (categoria) {
        case 1:
            precioTicket;
            break;
        case 2:
            descuento = 0.8;
            break;
        case 3:
            descuento = 0.5;
            break;
        case 4:
            descuento = 0.15;
            break;
    }
    
    montoTotal = precioTicket * cantidadTickets;

    descuentoFinal = montoTotal - (montoTotal * descuento);

    resultado = document.getElementById("totalPago");
    
    resultado.textContent = descuentoFinal;
    } 

BotonCalcular.addEventListener('click', calcularPrecio);