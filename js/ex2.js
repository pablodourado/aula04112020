document.querySelector("#btn").addEventListener("click", ()=> {
    let n1,n2,adicao;

    n1=parseInt(document.getElementById("n1").value);
    n2=parseInt(document.getElementById("n2").value);

    adicao = n1+n2;
    alert ("Resultado igual= "+adicao)

})