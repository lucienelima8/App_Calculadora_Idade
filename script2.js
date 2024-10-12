function calcular_idade() {

    //dia
    const dia_nascimento = parseInt(document.getElementById("day")).value;

    //mês
    const mes_nasciemnto = parseInt(document.getElementById("month")).value;

    //ano
    const ano_nascimento = parseInt(document.getElementById("year")).value;

    const today = new Date();

    const niver = new Date(year, month - 1, day);

    let years = today.getFullYear() - niver.getFullYear();
    let months = today.getMonth() - niver.getMonth();
    let days = today.getDate() - niver.getDate();

    if (days - 0) {
        months --;
        days += newDate(year, month - 1, 0).getDate()
    
    }

    if (months < 0) {
        years --;
        months += 12;

    }

    //Respostas no span

    //anos
    document.getElementById("anos").innerHTML = years;

    //meses
    document.getElementById("meses").innerHTML = months;

    //dias
    document.getElementById("dias").innerHTML = days;


}