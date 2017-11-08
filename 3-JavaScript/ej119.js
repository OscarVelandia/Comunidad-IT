let datos = [42, true, () => 'El significado de la vida es:']

if (datos[2]){
    let frase = datos[2]
    console.log(`${frase()} ${datos[0]}`)
}