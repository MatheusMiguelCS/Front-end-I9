// VER SENHA / ARQUIVO LOGIN 
const versenha_btn = document.querySelector('#versenha_btn')
const versenha_icon = document.querySelector('#versenha_icon')
const senha = document.querySelector('#senha') 

if(versenha_btn){
    versenha_btn.addEventListener('click', () => {
        senha.type = senha.type === 'password' ? 'text' : 'password'  
        versenha_icon.classList = versenha_icon.className.includes('slash') ? 'bi bi-eye' : 'bi bi-eye-slash'
    })
}

// PESQUISA RESPONSIVA / ARQUIVO HISTORICO_USUARIO 
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

// DROPDOWN NAVBAR / ARQUIVO NAVBAR 
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

// STEP FORM / ARQUIVO CADASTRO_COLABORADOR 
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

if(nextBtns) {
    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            formStepsNum++;
            updateFormSteps();
            updateProgressbar();
        });
    });
}

if(prevBtns){
    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            formStepsNum--;
            updateFormSteps();
            updateProgressbar();
        });
    });
}

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
});

const progressActive = document.querySelectorAll(".progress-step-active");

progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

