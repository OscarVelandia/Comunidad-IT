const mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];

const seleccionador = mutantes.map((mutante, indice) => {
    if(mutante.indexOf('Prof. Charles Francis Xavier') > -1 || mutante.indexOf('James "Logan" Howlett') > -1 || mutante.indexOf('Jean Elaine Grey') > -1){
        console.log(`${mutante.concat(' <3')}`);
    }
});

console.log(`\n-//Lista original de mutantes//-\n${mutantes.join('\n')}`)