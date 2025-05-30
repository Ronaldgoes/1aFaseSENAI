
  let eventoAtivo = false;

  document.getElementById("eventoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (eventoAtivo) {
      document.getElementById("mensagem").innerText = "Já existe um evento aberto.";
      return;
    }

    // Coleta os dados (exemplo)
    const trilha = document.getElementById("trilha").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const ponto = document.getElementById("ponto").value;
    const vagas = parseInt(document.getElementById("vagas").value);
    const nome = document.getElementById("nome").value;

    // Simula o cadastro (aqui você pode mandar pra banco de dados depois)
    eventoAtivo = true;
    document.getElementById("mensagem").innerText =
      `Evento criado com sucesso para a trilha ${trilha} por ${nome}.`;

    // Você pode adicionar um botão "Finalizar Evento" para liberar outro
  });
