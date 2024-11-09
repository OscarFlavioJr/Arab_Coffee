function toggleInput() {
  var inputElement = document.getElementById("search-bar");
  // Alterna entre block e none
  if (inputElement.style.display === "none") {
    inputElement.style.display = "block";
    inputElement.focus(); // Coloca o foco no input ao exibi-lo
  } else {
    inputElement.style.display = "none";
  }
}

// Evento de clique/toque para exibir o input
var searchButton = document.getElementById("search");

searchButton.addEventListener("pointerdown", function (event) {
  event.preventDefault();
  toggleInput(); // Chama a função para mostrar o input
});
