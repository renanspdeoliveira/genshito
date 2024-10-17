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
