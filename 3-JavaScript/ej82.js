let asterisco = '';

do {
    asterisco = asterisco + '*';
    console.log(asterisco);
    // El length compara esa cantidad de artículos, no importa el tipo de caracter que sea    
} while (asterisco.length <= '*************'.length);