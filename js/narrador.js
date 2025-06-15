let falaAtual = null;

document.addEventListener("DOMContentLoaded", () => {
  // Ouvir
  document.querySelectorAll('[data-acao="ouvir"]').forEach(botao => {
    botao.addEventListener("click", async () => {
      const id = botao.getAttribute("data-target");
      const velocidade = parseFloat(document.querySelector(`input[data-target="${id}"]`).value);

      // Busca o texto externo
      try {
        const resposta = await fetch(`../Texto.txt`);
        if (!resposta.ok) throw new Error("Erro ao carregar texto.");
        const texto = await resposta.text();

        if (speechSynthesis.speaking) speechSynthesis.cancel();

        falaAtual = new SpeechSynthesisUtterance(texto);
        falaAtual.lang = "pt-BR";
        falaAtual.rate = velocidade;
        speechSynthesis.speak(falaAtual);
      } catch (erro) {
        alert("Não foi possível carregar o texto: " + erro.message);
      }
    });
  });

  // Parar
  document.querySelectorAll('[data-acao="parar"]').forEach(botao => {
    botao.addEventListener("click", () => {
      speechSynthesis.cancel();
    });
  });

  // Atualizar exibição da velocidade
  document.querySelectorAll('input[type="range"]').forEach(slider => {
    const spanId = "vel-display-" + slider.getAttribute("data-target");
    const output = document.getElementById(spanId);
    if (output) {
      slider.addEventListener("input", () => {
        output.textContent = slider.value + "x";
      });
    }
  });
});