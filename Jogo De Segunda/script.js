
let confings = document.getElementById("BotãoConfiguração"); //puxando as configurações
let play = document.getElementById("Botão"); //puxando o botão de "jogar"
let back = document.getElementById("Voltar") //puxando o botão de sair das configurações
let body = document.getElementById("body")  //puxando o body diretamente
let modoClaro = document.getElementById("ModoClaro")  //modo claro dentro das configurações
let modoEscuro = document.getElementById("ModoEscuro") //modo escuro dentro das configurações
let ModoEscolhido = document.getElementById("EscolhaSeuModo") //pequena frase 
let continuar = document.getElementById("Continuação") // botão que fica no tutorial, onde o user aperta pra seguir pro jogo
let alinhamento = document.getElementById("Alinhamento") //alinhar os botões 
let BarraDoUser = document.getElementById("VidaDoUser") //barra de vida do Jogador 1
let BarraDoOponente = document.getElementById("VidaDoOponente") //barra de vida do jogador 2
let Iniciando //fazendo ela virar uma variável global
let Dado //fazendo virar uma variável global
let VidaDoUser = 50 //50 de vida pro Jogador 1
let VidaDoOponente = 50 //50 de vida pro Jogador 2 
let Jogador1 = prompt("Jogador 1, digite seu nome aqui") // aqui pega o nome do primeiro jogador
let Jogador2 = prompt("Jogador 2, digite seu nome aqui") //aqui pra pegar o nome do segundo jogador


back.style.opacity = "0"        //quando o jogo iniciar, o botão de voltar, modo escuro, modo claro, a frase, barras de vidas, estarão desativadas até que ele vá a seus destinos
modoClaro.style.opacity = "0"
modoEscuro.style.opacity = "0"
ModoEscolhido.style.opacity = "0"
BarraDoOponente.style.opacity = "0"
BarraDoUser.style.opacity = "0"


back.style.cursor = "default" //desabilitando o cursor e as funções dos botões, para que o user não clique sem querer e abra algo 
modoClaro.style.cursor = "default"
modoEscuro.style.cursor = "default"
modoClaro.disabled = true
back.disabled = true
modoEscuro.disabled = true     



function Configuração() { //ao entrar em configuração, os botões de voltar, modo escuro, modo claro e a frase irão aparecer, mas o botão de jogar e configuração irão sumir e perder suas funções
    back.style.opacity = "1"
    modoClaro.style.opacity = "1"
    modoEscuro.style.opacity = "1"
    ModoEscolhido.style.opacity = "1"
    ModoEscolhido.innerHTML = "Escolha a sua tela de fundo!"
    
    back.style.cursor = "pointer"
    modoClaro.style.cursor = "pointer"
    modoEscuro.style.cursor = "pointer"
    
    modoClaro.disabled = false
    back.disabled = false
    modoEscuro.disabled = false

    confings.style.opacity = "0"
    play.style.opacity = "0"
    confings.style.cursor = "default"
    play.style.cursor = "default"
    confings.disabled = true
    play.disabled = true
}

function ModoDark() { // quando o user selecionar o modo escuro, o fundo irá trocar, ficando com um fundo noturno
    body.style.backgroundImage = 'url("9999.jpg")'
    body.style.backgroundSize = "cover"
}

function ModoClaro() {  // quando o user selecionar o modo claro, o fundo irá trocar, ficando com um fundo ensolarado
    body.style.backgroundImage = 'url("9285000.jpg")'
    body.style.backgroundSize = "cover"
}

function Voltar() { // ao clicar em voltar, os botões de modo escuro, modo claro, frase e de botão de voltar irão sumir e perder suas funções e o botão de jogar e configurações aparecerão
    back.style.opacity = "0"
    modoClaro.style.opacity = "0"
    modoEscuro.style.opacity = "0"
    ModoEscolhido.style.opacity = "0"

    back.style.cursor = "default"
    modoClaro.style.cursor = "default"
    modoEscuro.style.cursor = "default"
    
    modoClaro.disabled = true
    back.disabled = true
    modoEscuro.disabled = true
    
    confings.style.opacity = "1"
    play.style.opacity = "1"
    confings.style.cursor = "pointer"
    play.style.cursor = "pointer"
    confings.disabled = false
    play.disabled = false

}


function Jogar() {  // ao apertar em jogar, o user será levado a um pequeno texto explicando como funciona o jogo (tutorial), e todos os botões serão retirados e aparecerá um para o user avançar
    play.style.opacity = "0"
    play.disabled = true
    play.style.cursor = "default"
    
    confings.style.opacity = "0"
    confings.disabled = true
    confings.style.cursor = "default"
    back.remove()

    ModoEscolhido.style.borderRadius = "20px"
    ModoEscolhido.innerHTML = "Tudo bem! Vamos começar explicando como funcionará o nosso jogo. Haverá um botão, quando você apertar nesse botão, irá sair um número aleátorio de 1-6, esse número que sair é o seu dano, você lutará contra outra pessoa, seu objetivo é ganhar dela. Boa sorte!"
    ModoEscolhido.style.opacity = "1"


    if (!document.querySelector(".Continuação")) { // para evitar que os botões se repitam, se não tiver botão criado, ele vai criar, mas se tiver um criado, ele não vai criar
        Iniciando = document.createElement("button")
        Iniciando.innerHTML = "Ok, entendi!"
        Iniciando.classList.add("Continuação") 
        alinhamento.appendChild (Iniciando)
        Iniciando.onclick = Iniciar 
    }
}

function Iniciar() { // quando o user clica pra iniciar o jogo normal, onde sai o texto, e o botão, e entra as barras de vidas, contagem do dano e os atacks
    ModoEscolhido.innerHTML = " "
    Iniciando.remove()
    ModoEscolhido.innerHTML = `${Jogador1}, você começa`
    ModoEscolhido.opacity = "1"
    
    BarraDoOponente.style.opacity = "1"
    BarraDoUser.style.opacity = "1"
    BarraDoOponente.innerHTML = "50"
    BarraDoUser.innerHTML = "50"
    
    Dado = document.createElement("button") // botão do jogador 1
    Dado.classList.add ("GiroDoDado1") 
    alinhamento.appendChild(Dado) // append child para não tirar as posições de outros botões
    Dado.innerHTML = `Dano ${Jogador1}`
    Dado.onclick = Dano

    DadoOponente = document.createElement("button") //botão de dano do jogador 2
    DadoOponente.classList.add("GiroDoDado2")
    alinhamento.appendChild(DadoOponente) // append child para não tirar as posições de outros botões
    DadoOponente.innerHTML = `Dano ${Jogador2}`
    DadoOponente.onclick = DanoOponente
}

function Dano() { // dano do jogador 1
    const danoJogador = Math.floor(Math.random() * 6) + 1// aqui é randomizado um número de 1 - 6, o número que sair é o dano que irá causar no oponente
    VidaDoOponente -= danoJogador
    BarraDoOponente.innerHTML = VidaDoOponente 
    
    ModoEscolhido.innerHTML = `${Jogador1} deu ${danoJogador} de dano` // se o jogador zerar a vida do oponente, tudo é removido e aparece quem ganhou
    if (VidaDoOponente <= 0){
        BarraDoUser.innerHTML = "0"
        BarraDoOponente.remove()
        BarraDoUser.remove()
        Dado.remove()
        DadoOponente.remove()

        ModoEscolhido.innerHTML = `${Jogador1} ganhou! Parabéns!`
    }
}


function DanoOponente() { // dano do jogador 2
    const danoOponente = Math.floor(Math.random() * 6) + 1 // aqui é randomizado um número de 1 - 6, o número que sair é o dano que irá causar no oponente
    VidaDoUser -= danoOponente
    BarraDoUser.innerHTML = VidaDoUser
    
    ModoEscolhido.innerHTML = `${Jogador2} deu ${danoOponente} de dano` // se o jogador zerar a vida do oponente, tudo é removido e aparece quem ganhou
    if (VidaDoUser <= 0){
        BarraDoOponente.innerHTML = "0"
        BarraDoOponente.remove()
        BarraDoUser.remove()
        Dado.remove()
        DadoOponente.remove()

        ModoEscolhido.innerHTML = `${Jogador2} ganhou! Parabéns!`
    }
}