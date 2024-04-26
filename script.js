

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/Logo.png";
        let imagem = document.querySelector('.icon');
        imagem.style.width = '150px';
        imagem.style.height = '80px';
    } 
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/logo-x.png";
        let imagem = document.querySelector('.icon');
        imagem.style.width = '60px';
        imagem.style.height = '60px';
    }
}

// Verifica a largura da tela
let larguraDaTela = window.matchMedia("(max-width: 768px)");

// Atualiza a propriedade disabled do botão com base na largura da tela
function verificaBotao() {
    let botao = document.querySelector('.icon');
    if (larguraDaTela.matches) {
        botao.addEventListener("click", menuShow);
        botao.removeAttribute("disabled");
    } else {
        botao.removeEventListener("click", menuShow);
        botao.setAttribute("disabled", "true");
        document.querySelector('.icon').src = "img/Logo.png";
        
        let imagem = document.querySelector('.icon');
        imagem.style.width = '150px';
        imagem.style.height = '80px';
    }
}

// Atualiza o estado do botão quando a página é carregada
window.onload = verificaBotao() ;

// Atualiza o estado do botão quando a largura da tela muda
window.addEventListener("resize", function() {
    larguraDaTela = window.matchMedia("(max-width: 768px)");
    verificaBotao();
});