//global variables declaration
const perguntaUsuario = document.querySelector('#inputPergunta');
const resposta = document.querySelector('#resposta');
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    'Certeza!',
    'Não tenho tanta certeza.',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente',
    'Minha resposta é não.',
    'Voce pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'Minhas fontes dizem não.',
    'Provavelmente',
    'Não é possível prever agora',
    'Perspectiva boa.',
    'As espectativas não são tão boas.',
    'Sim',
    'Concentre-se novamente.',
    'Sinais apontam que sim.'
];

//click oask question
function fazerPergunta() {
    if(perguntaUsuario.value == ''){
        alert('Por favor, escreva sua pergunta!');
        return;
    }

    buttonPerguntar.setAttribute('disabled', true);

    const pergunta = '<div>' + perguntaUsuario.value + '<div>'

//generate random number
    const totalRespostas = respostas.length;
    const respostaAleatoria = Math.floor(Math.random() * totalRespostas);
    resposta.innerHTML = pergunta + respostas[respostaAleatoria];

    resposta.style.opacity = 1;
//hiding the question
    setTimeout(function() {
        resposta.style.opacity = 0;
        buttonPerguntar.removeAttribute('disabled')
    }, 3000);
}
