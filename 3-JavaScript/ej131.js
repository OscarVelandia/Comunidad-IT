const alumnas = ['Maria', 'Pedra', 'Alexandra', 'Lorna', 'Monroe'];
const alumnos = ['Mario', 'Pedro', 'Pablo', 'Alexander', 'Manuel'];
let contador = 1;
let indice = 0;

const todosLosAlumnos = alumnas.concat(alumnos);

console.log(`${alumnas[0]}\n${alumnas[1]}\n${alumnas[2]}\n${alumnas[3]}\n${alumnas[4]}`);

while(contador <= alumnos.length){
    console.log(alumnos[indice]);
    contador++;
    indice++;
};

for(contador = 1, indice = 0; contador <= todosLosAlumnos.length; contador++, indice++){console.log(todosLosAlumnos[indice])};