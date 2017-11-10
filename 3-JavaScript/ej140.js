const mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James', 'Logan', 'Howlett', 'Ororo Monroe'];
//Con esta variable puedo requerir el mutante que quiera.
let mutanteRequerido = 'Scott Summers';

let mutantesNuevaLista = mutantes.filter(mutante => mutante === mutanteRequerido);

console.log(`//Array originales//\n${mutantes[1]}\n//Nuevo Array//\n${mutantesNuevaLista}`);