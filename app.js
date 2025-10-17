function criaCartao(categoria, pergunta, resposta) {
let container = document.getElementByIs('container');
let cartao = document.createElement('article');
cartao. className = 'cartao';


cartao.innerHTML = `
<div class="cartao_conteudo>
}
let respostaEstaVisivel = false;

function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    viraCartao.classList.toggle('active', respostaEstaVisivel)
}
viraCartao.addEventListener('click', viraCartao)

container.appendhild(catao)
}