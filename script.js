
const botao = document.querySelector('.btn')
const menulateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const backgroud = document.querySelector('.backgroud')

botao.addEventListener('click', () => {
    menulateral.classList.add('ativo')
    botao.classList.add('ativo')
    conteudo.classList.add('ativo')
    backgroud.classList.add('ativo')
    document.body.style.backgroundColor = menulateral.classList.contains['ativo'] ?' #34495e' : '#ecf0f1 '

    
})

backgroud.addEventListenera('click', () => {
    menulateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    backgroud.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'

})