document.querySelector('#btn').addEventListener('click', () => {
    let n1, n2, soma, subtracao, multiplicacao, divisao;
    /* todas as vezes que a informação vier de um input ela vem como uma string '1' */
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    /* NaN - not a number = não é um número*/
    /* acrescentar os cálculos de subtração n1- n2, multiplicação n1*n2 e divisão
    porém tome cuidado pois o usuário pode digitar 0 e eu não posso dividir por 0.
    n1/n2  se n2>0.
    Mostrar os resultados no mesmo alert, somente quebrando a linha.*/


    soma = n1 + n2;
    subtracao = n1 - n2;
    multiplicacao = n1 * n2;
    // estrutura de desição - identificar se n2=0 //
    if (n2 == 0) // n2>0 
    {
        //só executa essa região quandoa condição for verdadeira //
        divisao = 'impossível dividir por zero!';
    } else {
        //só executa essa região quandoa condição for falsa //
        divisao = n1 / n2;
    }

    // mostrar os resultados --lembrar que quebra a linha
    alert('soma= ' + soma + '\n' +
        'Subtração= ' + subtracao + '\n' +
        'Multiplicação= ' + multiplicacao + '\n' +
        'Divisão= ' + divisao + '\n')
})




