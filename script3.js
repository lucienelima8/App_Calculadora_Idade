function calcular_idade() {

    //DECLARANDO VARIÁVEIS
    //dia
    const dia_nascimento = parseInt(document.getElementById("day").value);

    //mês
    const mes_nascimento = parseInt(document.getElementById("month").value - 1);

    //ano
    const ano_nascimento = parseInt(document.getElementById("year").value);





    // Limpar mensagens de erro anteriores
    clearErrors();




    //ERRO
    //Para exibir a mensagem de erro se digitar dados inválidos no dia, mê ou ano
    const isValid = true;

    //Msgm de erro pro dia
    if (!isValidDay(dia_nascimento, mes_nascimento, ano_nascimento)){
        showError("Digite um dia válido.", "day");
        isValid = false;

    }

    //Msgm de erro pro mês
    if (!isValidMonth(ano_nascimento)){
        showError("Digite um mês válido.", "month");
        isValid = false;
        
    }

    //Msgm de erro pro ano
    if (!isValidYear(ano_nascimento)) {
        showError("Digite um ano válido.", "year");
        isValid = false;
    }


    //Para interromper a execução da função se alguma validação falhar
    if(!isValid){
        return;

    }




    //const today recebe new Date() para armazenar a data que o usuário digitar
    //new Date() é para criar uma data específica
    const today = new Date();

    //const niver vai receber new Date() que é a data digitada pelo usuário
    const niver = new Date(ano_nascimento, mes_nascimento - 1, dia_nascimento);




    //FUNÇÃO CALCULAR QUANTOS DIAS, MESES E ANOS O USUÁRIO TEM DE VIDA:

    //variáveis pra receber a const today (que recebe a data digitada pelo usuário)
    //let years recebe today.getFullYear (variável  recebe ano que usuário digitar - ano atual)
    let years = today.getFullYear() - niver.getFullYear(); //getFullYear() pra pegar o ano atual
    let months = today.getMonth() - niver.getMonth(); //getMonth() pra pegar o mês atual
    let days = today.getDate() - niver.getDate(); //getDate() pra pegar o dia atual

    


    //Verifica se os dias digitados são positivos para que o bloco abaixo seja executado
    if (days < 0) {

        //se mês for positivo, o dia atual ainda não fez aniversário, então deve-se subtrair um mês do total de meses
        months --;

        //getDate() retorna número de dias no mês de nascimento para ajustar o cálculo de dias caso o usuário não tenha feito niver ainda
        //days += new Date(ano_nascimento, mes_nasciemnto - 1, 0).getDate();
        days += new Date(ano_nascimento, mes_nascimento, 0).getDate();

    
    }


    //Verifica se o mês se tornou negativo após a verificação acima.
    if (months < 0) {

        //se o mês for negativo, o ano atual deve ser subtraído em 1, já que a pessoa nãao completou ano de vida
        years --;

        //pra corrigir o valor de  meses que ainda faltam até o próximo niver do usuário
        months += 12;

    }



    
    //RESPOSTA NO SPAN DAS QUANTIDADES DE DIAS, ANOS E MESES DE VIDA DO USUÁRIO
    
    //anos
    document.getElementById("anos").innerHTML = years;

    //meses
    document.getElementById("meses").innerHTML = months;

    //dias
    document.getElementById("dias").innerHTML = days;




    //FUNÇÕES PARA VALIDAR O DIA, MÊS E ANO:

    //dia
    function isValidDay(day, month, year){

        //isNaN mostra valor indefinido se o dia for menor que 1 ou mês menor que 1 ou mês maior que 12 ou ano < 1
        if(isNaN(day) || day < 1 || month < 1 || month > 12 || year < 1) {
            return false;

        }

        const maxDays = new Date(year, month, 0).getDate();
        return day <= maxDays;
    }


    //mês
    function isValidMonth(month) {
        //valor correto se mês >= 1 e mês <= 12
        return !isNaN(month) && month >= 1 &&  month <= 12;

    }

    //ano
    function isValidYear(year){
        //valor correto se ano > 0
        return !isNaN(year) && year > 0;

    }





    //FUNÇÃO PRA MOSTRAR MENSAGEM DE ERRO
    function showError(message, field) {
        const errorElement = document.createElement("p");

        errorElement.className = "erro";
        errorElement.style.color = "red";
        errorElement.textContent =  message;

        document.getElementById(field).parentNode.appendChild(errorElement);

    }




    //FUNÇÃO PARA LIMPAR MSGNS DE ERROS ANTERIORES
    function clearErrors() {
        const errorElements = document.querySelectorAll(".erro");
        errorElements.forEach(function(element){
            element.remove();
        })
    }







}