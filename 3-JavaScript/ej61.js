let dia = 2;
let nombreDelDia = null;

switch (dia) {
    case 2:
        nombreDelDia = 'El día seleccionado es el Lunes, Día de la Luna';
        break;
    case 3:
        nombreDelDia = 'El día seleccionado es el Martes, Dia de Tiw';
        break;
    case 4:
        nombreDelDia = 'El día seleccionado es el Miercoles, Día de Mercurio';
        break;
    case 5:
        nombreDelDia = 'El día seleccionado es el Jueves, Día de Þunor';
        break;
    case 6:
        nombreDelDia = 'El día seleccionado es el Viernes, Día de Venus';
        break;
    case 7:
        nombreDelDia = 'El día seleccionado es el Sabado, Día de Saturno';
        break;
    case 1:
        nombreDelDia = 'El día seleccionado es el Domingo, Día del sol';
        break;
    default:
        nombreDelDia = 'Por favor ingrese un número del 1 al 7.';
}

console.log(nombreDelDia);