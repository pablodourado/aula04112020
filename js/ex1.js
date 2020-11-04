/* comentario js bloco */
document.querySelector("#botao").addEventListener("dblclick",()=> {/*dblclick é duplo click*/
    /* pegar o nome digitado e amarzenar em uma unidade de memoria*/

    let nome; 
    /* declaração de variavel */
    nome =document.getElementById("nome").value;
    /*sinal de igual significa atribuição*/
    let sobrenome = document.getElementById("sobrenome").value;
    /*imprimir valores*/
    document.write("O nome digitado é: "+nome+" "+sobrenome);

})

document.querySelector("#botao").addEventListener("keydown", () => {

    let nome =document.getElementById("nome").value;
    let sobrenome =document.getElementById("sobrenome").value;

    /* cubo rosa é um metodo que significa que vai fazer alguma ação*/
    alert("O nome digitado é "+nome+" "+sobrenome);

})