function estação() { 
    let mês = prompt('Digite o mês em extenso (ex: Março)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { 
        case ' JUNHO':case'JULHO': case 'AGOSTO': case 'SETEMBRO': 
            estação = 'INVERNO'
            break 
        case 'OUTUBRO': case 'NOVEMBRO': case 'DESEMBRO':
            estação = 'PRIMAVERA'
            break
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estação = 'VERÃO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}