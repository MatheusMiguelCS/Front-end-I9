const versenha_btn = document.querySelector('#versenha_btn')
const versenha_icon = document.querySelector('#versenha_icon')
const senha = document.querySelector('#senha') 

if(versenha_btn){
    versenha_btn.addEventListener('click', () => {
        senha.type = senha.type === 'password' ? 'text' : 'password'  
        versenha_icon.classList = versenha_icon.className.includes('slash') ? 'bi bi-eye' : 'bi bi-eye-slash'
    })
}


const input_busca = document.querySelector('#input-busca');
const tabela_historico = document.querySelector('#tabela-historico');

if(input_busca){
    input_busca.addEventListener('keyup', () => {
        let expressao = input_busca.value.toLowerCase();

        if (expressao.length === 1) {
            return;
        }

        let linhas = tabela_historico.getElementsByTagName('tr');

        for (let posicao in linhas) {
            if (true === isNaN(posicao)) {
                continue;
            }

            let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

            if (true === conteudoDaLinha.includes(expressao)) {
                linhas[posicao].style.display = '';
            } else {
                linhas[posicao].style.display = 'none';
            }
        }
    })
}

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

