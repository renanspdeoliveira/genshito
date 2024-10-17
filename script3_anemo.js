const imagens = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.jpg'
];
let imagemAtual = 0;

function abrirModal(index) {
    imagemAtual = index; // Atualiza a imagem atual
    document.getElementById('modal').style.display = 'flex'; // Mostra o modal
    document.getElementById('imagem-modal').src = imagens[imagemAtual]; // Define a imagem
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none'; // Esconde o modal
}

function mudarImagem(delta) {
    // Atualiza a imagem atual
    imagemAtual = (imagemAtual + delta + imagens.length) % imagens.length; // Cicla entre as imagens
    document.getElementById('imagem-modal').src = imagens[imagemAtual]; // Define a nova imagem
}

// Seleciona todos os links e caixas
const hoverLinks = document.querySelectorAll(".hoverLink");
const hoverBoxes = document.querySelectorAll(".hover-box");

// Adiciona eventos de mouse para cada link
hoverLinks.forEach((link, index) => {
    link.addEventListener("mouseenter", () => {
        hoverBoxes[index].style.display = "block"; // Mostra a caixa correspondente
    });

    link.addEventListener("mouseleave", () => {
        hoverBoxes[index].style.display = "none"; // Esconde a caixa correspondente
    });
});