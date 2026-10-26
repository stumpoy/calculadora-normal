/*
Operadores aritméticos:
+ soma
- subtração
* multiplicação
/ divisão 
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)

exemplo:
let idade = 20;
let niver = idade--
niver = 19;


Operadores de atribuição:
= igual 
+= mais ou igual
-= menos ou igual 
/= dividido ou igual 
*=multiplicado ou igual 

Operadores de sequência:
+ serve para concatenar valores ----> string ou variáveis 
- serve para subtrair valores ----> string ou variáveis 

Operadores de comparação:
Retorna TRUE (verdadeiro) ou FALSE (falso)
== compara 2 valores ("500" = 500 TRUE) -----> entende apenas o valor, oq tá escrito e pah
=== comparar valores e tipos de dado (500 = "500" FALSE) ------> entende se é texto, número ou sla, mesmo se forem iguais, se um for texto e o outro não, é falso
!= (diferente) de valores apenas
!== comparar a diferença de valores e tipo de dado 

< menor    > maior
<= menor   >= maior 
ou igual   ou igual



*/

function somar(){
     let n1 = Number(document.getElementById("valor1").value);
     let n2 = Number(document.getElementById("valor2").value);
     let operacao = n1 + n2;
     document.getElementById("resultado")
     .innerHTML= operacao;

     /*alterar a cor do resultado caso o número for negativo*/

const corResultado = document.getElementById("resultado");
if (operacao < 0 ) {
      corResultado.style.backgroundColor = "red";
}

else {
     corResultado.style.backgroundColor = "Lightgreen";
}


}


function subtrair(){
     let n1 = Number(document.getElementById("valor1").value);
     let n2 = Number(document.getElementById("valor2").value);
     let operacao = n1 - n2;
     document.getElementById("resultado")
     .innerHTML= operacao;

     /*alterar a cor do resultado caso o número for negativo*/

const corResultado = document.getElementById("resultado");
if (operacao < 0 ) {
      corResultado.style.backgroundColor = "red";
}

else {
     corResultado.style.backgroundColor = "Lightgreen";
}


}

function multiplicar(){
     let n1 = Number(document.getElementById("valor1").value);
     let n2 = Number(document.getElementById("valor2").value);
     let operacao = n1 * n2;
     document.getElementById("resultado")
     .innerHTML= operacao;

     /*alterar a cor do resultado caso o número for negativo*/

const corResultado = document.getElementById("resultado");
if (operacao < 0 ) {
      corResultado.style.backgroundColor = "red";
}

else {
     corResultado.style.backgroundColor = "Lightgreen";
}


}

function dividir(){
     let n1 = Number(document.getElementById("valor1").value);
     let n2 = Number(document.getElementById("valor2").value);

     if(n2 === 0){
          
          document.getElementById("resultado")
          .innerHTML = "Divisão por 0, não existe";

          document.getElementById("resultado").style.backgroundColor = "yellow";
     }
     else{
          let operacao = n1 / n2;
          document.getElementById("resultado")
          .innerHTML= operacao;

     /*alterar a cor do resultado caso o número for negativo*/

          const corResultado = document.getElementById("resultado");
          if (operacao < 0 ) {
          corResultado.style.backgroundColor = "red";
}

      else {
          corResultado.style.backgroundColor = "Lightgreen";
}
          
     }

}

function limpar(){
     document.getElementById("valor1").value = "";
     document.getElementById("valor2").value = "";
     document.getElementById("resultado").innerHTML = "---";
     document.getElementById("resultado").style.backgroundColor = "lightgreen";

}