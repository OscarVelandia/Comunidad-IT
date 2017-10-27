let numeroDeMes = 1;
let nombreDelMes = null;
//let cantidadDeDias = null; NO es necesaria esta variable porque el switch no acepta mas de 1 variablen dentro de cada caso

switch (numeroDeMes) {
    case 1:
        nombreDelMes = 'El mes seleccionado es Enero y tiene 31 días';
        break;
    case 2:
        nombreDelMes = 'El mes seleccionado es Febrero y tiene 28/29 días';
        break;
    case 3:
        nombreDelMes = 'El mes seleccionado es Marzo y tiene 31 días';
        break;
    case 4:
        nombreDelMes = 'El mes seleccionado es Abril y tiene 30 días';
        break;
    case 5:
        nombreDelMes = 'El mes seleccionado es Mayo y tiene 31 días';
        break;
    case 6:
        nombreDelMes = 'El mes seleccionado es Junio y tiene 30 días';
        break;
    case 7:
        nombreDelMes = 'El mes seleccionado es Julio y tiene 31 días';
        break;
    case 8:
        nombreDelMes = 'El mes seleccionado es Agosto y tiene 31 días';
        break;
    case 9:
        nombreDelMes = 'El mes seleccionado es Septiembre y tiene 30 días';
        break;
    case 10:
        nombreDelMes = 'El mes seleccionado es Octubre y tiene 31 días';
        break;
    case 11:
        nombreDelMes = 'El mes seleccionado es Noviembre y tiene 30 días';
        break;
    case 12:
        nombreDelMes = 'El mes seleccionado es Diciembre y tiene 31 días';
        break;  
    default:
        nombreDelMes = 'Ingrese un número entre 1 y 12';
}
console.log(nombreDelMes);