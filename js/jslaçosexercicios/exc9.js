function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 10 até 1</h2>`

    let cont = 10
    while (cont >= 1) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont -- 
    }
    saida.innerHTML += ` &#x1F3C1;`
}