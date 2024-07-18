function pesquisa() {
    const INPUT_BUSCA = document.querySelector('#input-busca');
    const TABELA_HISTORICO = document.querySelector('#tabela-historico');

    INPUT_BUSCA.addEventListener('keyup', () => {
        let expressao = INPUT_BUSCA.value.toLowerCase();

        if (expressao.length === 1) {
            return;
        }

        let linhas = TABELA_HISTORICO.getElementsByTagName('tr');

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
    });
};
    

function versenha (){
    const show_pw_button = document.querySelector("#versenha")
    const show_pw_icon = document.querySelector("#pw_icon")
    const pw_input = document.querySelector("#senha") 

    show_pw_button.addEventListener('click', () => {
        pw_input.type = pw_input.type === 'password' ? 'text' : 'password'  
        show_pw_icon.classList = show_pw_icon.className.includes('bi bi-eye-slash') ? 'bi bi-eye' : 'bi bi-eye-slash'
    })
};
