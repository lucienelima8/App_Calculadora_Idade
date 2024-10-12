function calcular_idade() {

    //dia
    const dia_nascimento = parseInt(document.getElementById("day")).value;

    //mês
    const mes_nasciemnto = parseInt(document.getElementById("month")).value -1;

    //ano
    const ano_nascimento = parseInt(document.getElementById("year")).value;


    const data_nascimento = new Date(ano_nascimento, mes_nasciemnto, dia_nascimento);

    const data_hoje = new Date();

    let anos = hoje.getFullYear() - data_nascimento.getFullYear();
    let meses = hoje.getMonth() - data_nascimento.getMonth();
    let dias = hoje.getDate() - data_nascimento.getDate();

    if (dias < 0) {
        meses -= 1;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();

    }

    if (meses < 0) {
        anos -= 1;
        meses += 12;

    }

    document.getElementById("anos").innerHTML= year;

    document.getElementById("meses").innerHTML= months;

    document.getElementById("dias").innerHTML= days;



}