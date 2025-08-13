
let confings = document.getElementById("BotãoConfiguração");
let play = document.getElementById("Botão");
let back = document.getElementById("Voltar")
let body = document.getElementById("body")
let modoClaro = document.getElementById("ModoClaro")
let modoEscuro = document.getElementById("ModoEscuro")
let ModoEscolhido = document.getElementById("EscolhaSeuModo")
let continuar = document.getElementById("Continuação")
let alinhamento = document.getElementById("Alinhamento")

back.style.opacity = "0"        /*Quando o jogo iniciar, os botões devem estar invisiveis, sem cursor e desativados ao click*/
modoClaro.style.opacity = "0"
modoEscuro.style.opacity = "0"
ModoEscolhido.style.opacity = "0"


back.style.cursor = "default"
modoClaro.style.cursor = "default"
modoEscuro.style.cursor = "default"
    
modoClaro.disabled = true
back.disabled = true
modoEscuro.disabled = true     



function Configuração() { /*Quando o user clicar nas configurações, os botões  de "Voltar", "Modo claro" e "Modo escuro", aparecerão, com estilização, e serão habilitados para false, para que assim voltem a funcionar*/
    back.style.opacity = "1"
    modoClaro.style.opacity = "1"
    modoEscuro.style.opacity = "1"
    ModoEscolhido.style.opacity = "1"

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

function ModoEscuro() { /*Ao clicar em "Modo escuro", o background irá mudar de imagem, e a imagem irá cobrir todo o fundo */
    body.style.backgroundImage = 'url("9999.jpg")'
    body.style.backgroundSize = "cover"
}

function ModoClaro() {  /*Ao clicar em "Modo claro", o background irá mudar de imagem, e a imagem irá cobrir todo o fundo */
    body.style.backgroundImage = 'url("9285000.jpg")'
    body.style.backgroundSize = "cover"
}

function Voltar() { /*Ao clicar em "voltar", os botões irão ficar invisiveis novamente, perdendo sua funcionalidade, e os botões iniciais aparecendo novamente e voltando a funcionar*/
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
    continuar.remove()
}


function Jogar() {
    play.style.opacity = "0"
    play.disabled = true
    play.style.cursor = "default"

    confings.style.opacity = "0"
    confings.disabled = true
    confings.style.cursor = "default"

    ModoEscolhido.style.backgroundColor = "white"
    ModoEscolhido.style.borderRadius = "20px"
    ModoEscolhido.innerHTML = "Tudo bem! Vamos começar explicando como funcionará o nosso jogo. Haverá um botão, quando você apertar nesse botão, irá sair um número aleátorio de 1-6, esse número que sair é o seu dano, você lutará contra outra pessoa, seu objetivo é ganhar dela. Boa sorte!"
    ModoEscolhido.style.opacity = "1"

    back.style.opacity = "1"
    back.disabled = false
    let continuar = document.createElement("button")
    continuar.innerHTML = "Ok, entendi!"
    continuar.classList.add("Continuação") /*alinhamento vira o pai, criando esse botão do lado do "voltar"*/
    alinhamento.appendChild (continuar)
}