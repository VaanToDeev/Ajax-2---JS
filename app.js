const iframe = document.querySelector('.responsive-iframe')
const barraDePesquisa = document.querySelector('#url_text')
const navegador = document.querySelector('.browser')
const barraPrincipal = document.querySelector('.row')

barraDePesquisa.addEventListener('keyup', (e) => {
if (e.code === "Enter"){
    iframe.src = barraDePesquisa.value
}
})

document.body.addEventListener('keyup', (e) => {

if (e.code == "KeyN"){
document.body.style.backgroundColor = "#1C1C1C"
barraPrincipal.style.backgroundColor = "#1C1C1C"
}


})


