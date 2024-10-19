function calcular_idade() {
    // Limpa mensagens de erro
    limparErros();

    // Declaração das variáveis para os campos de entrada
    const dia_nascimento = parseInt(document.getElementById("day").value);
    const mes_nascimento = parseInt(document.getElementById("month").value);
    const ano_nascimento = parseInt(document.getElementById("year").value);

    let erroEncontrado = false;

    // Validação do dia
    if (isNaN(dia_nascimento) || dia_nascimento < 1 || dia_nascimento > 31) {
        mostrarErro("day", "Dia inválido.");
        erroEncontrado = true;

    }

    // Validação do mês
    if (isNaN(mes_nascimento) || mes_nascimento < 1 || mes_nascimento > 12) {
        mostrarErro("month", "Mês inválido.");
        erroEncontrado = true;

    }

    // Validação do ano
    const anoAtual = new Date().getFullYear();
    if (isNaN(ano_nascimento) || ano_nascimento < 1900 || ano_nascimento > anoAtual) {
        mostrarErro("year", "Ano inválido.");
        erroEncontrado = true;

    }

    // Se houver erros, interrompe a execução
    if (erroEncontrado) {
        return;
    }

    // Calcular idade se os dados forem válidos
    const today = new Date();
    const niver = new Date(ano_nascimento, mes_nascimento - 1, dia_nascimento);

    let years = today.getFullYear() - niver.getFullYear();
    let months = today.getMonth() - niver.getMonth();
    let days = today.getDate() - niver.getDate();

    if (days < 0) {
        months--;
        days += new Date(ano_nascimento, mes_nascimento - 1, 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Atualizar o conteúdo dos spans
    document.getElementById("anos").innerHTML = years;
    document.getElementById("meses").innerHTML = months;
    document.getElementById("dias").innerHTML = days;
}

// Função para mostrar a mensagem de erro
function mostrarErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    const erro = document.createElement("p");
    erro.className = "erro";
    erro.innerText = mensagem;
    campo.parentNode.insertBefore(erro, campo.nextSibling);

    //pra mostrar msgm de erro na cor vermelha
    erro.style.color = "red";

    //tamanho msgm de erro
    erro.style.fontSize = ".8rem";

    //msgm erro em negrito
    erro.style.fontWeight = "bolder";

}

// Função para limpar mensagens de erro
function limparErros() {
    const erros = document.querySelectorAll(".erro");
    erros.forEach(erro => erro.remove());
}
