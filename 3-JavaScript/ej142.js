const mutantes = ['Prof. Charles Francis Xavier', 1, 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James', 'Logan', 'Howlett', 'Ororo Monroe'];

//Convirtiendo cada elemento en string se puede usar en lugares donde solo este sea el tipo de dato requerido.
const  mutantesComoString = mutantes.map(mutante => mutante.toString());

console.log(mutantesComoString);