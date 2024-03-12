const numeros = [];
let continuar =0;
let maiorNumero = null;
let menorNumero = null;
// Escreva um algoritmo que leia valores inteiros e encontre o maior e o menor deles. Termine a leitura se o usuário digitar zero (0)

do {
    numeros.push(prompt("Digite um número: "));
    
    continuar = prompt(`
    [ 0 ] para encerrar
    [ 1 ] para continuar`);
} while (continuar == 0);

for (let i = 0; i < numeros.length; i++) {

       if(maiorNumero > numeros[i]){
        maiorNumero = numeros[i]
       }else if(menorNumero < numeros[i]){
        menorNumero = numeros[i]
       }
}
alert(`Maior Número: ${maiorNumero}
       Menor Número: ${menorNumero}`);
       