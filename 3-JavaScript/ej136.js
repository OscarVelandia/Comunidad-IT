const mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];
let frase = '';

mutantes.forEach(mutante => {    
    if(mutante === 'Jean Elaine Grey' || mutante === 'James "Logan" Howlett'){
        frase += mutante.concat(' / ')
    }
});

console.log(frase)