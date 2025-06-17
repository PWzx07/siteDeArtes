const openModal = document.getElementById("open");
const closeModal = document.getElementById("close");
const modal = document.getElementById("modal");

// Abrir o modal
openModal.onclick = () => {
  modal.style.display = "block";
}

// Fechar ao clicar no X
closeModal.onclick = () => {
  modal.style.display = "none";
}

// Fechar ao clicar fora do conteúdo do modal
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
