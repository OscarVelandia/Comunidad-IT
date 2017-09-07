let datos = [42, true, function() {return 'El significado de la vida es:'}]

if (datos[2]){
    frase = datos[2]
    console.log(`${frase()} ${datos[0]}`)
}