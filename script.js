let slideCarrossel = document.getElementsByClassName('imagem-lista')

let setaAvancar = document.getElementById('seta-avancar')
let setaVoltar = document.getElementById('seta-retroceder')

let tituloCartao = document.getElementById('title')

let corLink = document.getElementsByClassName('linkagem')

let indiceImagem = 0

let indiceTitulo = 1

function avancarImagem() {
    slideCarrossel[indiceImagem].classList.remove('actived')
    indiceImagem++
    slideCarrossel[indiceImagem].classList.add('actived')

    indiceTitulo++
    tituloCartao.innerHTML = `Título imagem ${indiceTitulo}`

    setaVoltar.style.display = 'block'

    if (indiceImagem === slideCarrossel.length - 1) {
        setaAvancar.style.display = 'none'
    }
    
    if(indiceTitulo === 2){
        corLink.style.color = "yellow"
    }
}

function voltarImagem(){
    slideCarrossel[indiceImagem].classList.remove('actived')

    indiceImagem--

    slideCarrossel[indiceImagem].classList.add('actived')

    indiceTitulo--
    tituloCartao.innerHTML = `Título imagem ${indiceTitulo}`

    setaAvancar.style.display = 'block'

    if(indiceImagem === 0){
        setaVoltar.style.display = 'none'
    }
    
    console.log(indiceImagem)

    if (indiceImagem === 1) {
        corLink.style.color = "yellow"
    } else if (indiceImagem === 2) {
        corLink.style.color = '#A63A17'
    } else if (indiceImagem === 3) {
        corLink.style.color = '#10ACDD'
    }
}