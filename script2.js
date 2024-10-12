function calcular_idade() {

    //dia
    const dia_nascimento = parseInt(document.getElementById("day").value);

    //mês
    const mes_nascimento = parseInt(document.getElementById("month").value - 1);

    //ano
    const ano_nascimento = parseInt(document.getElementById("year").value);




    //const today recebe new Date() para armazenar a data que o usuário digitar
    //new Date() é para criar uma data específica
    const today = new Date();

    //const niver vai receber new Date() que é a data digitada pelo usuário
    const niver = new Date(ano_nascimento, mes_nascimento - 1, dia_nascimento);




    //variáveis pra receber a const today (que recebe a data digitada pelo usuário)
    //let years recebe today.getFullYear (variável  recebe ano que usuário digitar - ano atual)
    let years = today.getFullYear() - niver.getFullYear(); //getFullYear() pra pegar o ano atual
    let months = today.getMonth() - niver.getMonth(); //getMonth() pra pegar o mês atual
    let days = today.getDate() - niver.getDate(); //getDate() pra pegar o dia atual

    


    //Verifica se os dias digitados são positivos para que o bloco abaixo seja executado
    if (days - 0) {

        //se mês for positivo, o dia atual ainda não fez aniversário, então deve-se subtrair um mês do total de meses
        months --;

        //getDate() retorna número de dias no mês de nascimento para ajustar o cálculo de dias caso o usuário não tenha feito niver ainda
        //days += new Date(ano_nascimento, mes_nasciemnto - 1, 0).getDate();
        days += new Date(ano_nascimento, mes_nascimento - 1).getDate();

    
    }


    //Verifica se o mês se tornou negativo após a verificação acima.
    if (months < 0) {

        //se o mês for negativo, o ano atual deve ser subtraído em 1, já que a pessoa nãao completou ano de vida
        years --;

        //pra corrigir o valor de  meses que ainda faltam até o próximo niver do usuário
        months += 12;

    }



    
    //Respostas no span:

    //anos
    document.getElementById("anos").innerHTML = years;

    //meses
    document.getElementById("meses").innerHTML = months;

    //dias
    document.getElementById("dias").innerHTML = days;


}