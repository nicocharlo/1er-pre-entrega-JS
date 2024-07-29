alert("Bienvenido a Telocalulo.com! Te ayudaremos a calcular tu prestamo");

let ingresosMensuales;
let edad;
let montoSolicitado;
let aniosFinanciamiento;
let montoAPagar;
let cuotaMensual;

montoSolicitado = parseInt(prompt("Ingrese el monto a solicitar: "));
aniosFinanciamiento = parseInt(prompt("Ingrese la cantidad de años de financiamiento"));
edad = parseFloat(prompt("Ingrese su edad"));

switch(true){
        case (edad>18 && edad<=30):
                montoAPagar = montoSolicitado * 1.2;
                cuotaMensual = montoAPagar / aniosFinanciamiento / 12;
        break;
        case (edad>30 && edad<=50):
                montoAPagar = montoSolicitado * 1.4;
                cuotaMensual = montoAPagar / aniosFinanciamiento / 12;
        break;
        case (edad>50 && edad<80):
                montoAPagar = montoSolicitado * 1.6;
                cuotaMensual = montoAPagar / aniosFinanciamiento / 12;
        break;
        default:
                montoAPagar = montoSolicitado * 1.9;
                cuotaMensual = montoAPagar / aniosFinanciamiento / 12;
}


function imprimirResultados(){
        alert("El monto total a pagar es de" + montoAPagar);
        alert("La cuota mensual a pagar es de " + cuotaMensual.toFixed(2));                2;
}

imprimirResultados();