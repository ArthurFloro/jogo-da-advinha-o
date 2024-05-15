document.getElementById("verif").addEventListener("click", () => {
  const palavra = "celular";
  const tentativa = document.getElementById("rep").value;
  const maxTentativas = 3;
  let tent = 0;

  tent++; // Incrementa o número de tentativas

  if (tent >= maxTentativas) {
    // Verifica se o número de tentativas atingiu ou excedeu o máximo
    alert("Tentativas esgotadas. Você perdeu!");
    window.location.href = "index.html"; // Redireciona para a página index.html
  }

  if (tentativa == palavra) {
    alert("Parabéns, Você Acertou!");
  } else {
    alert("Errou! Tente novamente");
  }
});
