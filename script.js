// Seleciona a imagem pelo id
const foto = document.getElementById("foto");

// Animação ao passar o mouse - Zoom in
foto.addEventListener("mouseover", function() {
    foto.style.transform = "scale(1.1)";
    foto.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
});

// Volta ao normal quando o mouse sai
foto.addEventListener("mouseout", function() {
    foto.style.transform = "scale(1)";
    foto.style.boxShadow = "none";
});

// Animação de rotação ao clicar
foto.addEventListener("click", function() {
    foto.style.transform = "rotate(360deg)";
    
    // Volta ao normal após 1 segundo
    setTimeout(function() {
        foto.style.transform = "rotate(0deg)";
    }, 1000);
});
