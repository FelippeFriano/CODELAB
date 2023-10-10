function idade(){
    let dia = window.prompt('Coloque o dia em que nasceu')
    let ano = window.prompt('Coloque o ano em que nasceu')
    let anoatual = 2023
    let idade = ano-anoatual

    let res = document.getElementById('saida')
    res.innerHTML =  `<p>Sua idade é<mark>${idade}</mark>.</p>`
}