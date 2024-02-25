// "Soma um número com ele mesmo até o valor digitado ser igual a 0"
let inputNumero = 0;
let soma = 0;

do {
    inputNumero = Number(prompt("Digite um número: (Ou Digite [0] para sair)"));

    if(inputNumero != 0){
        
       soma = soma += inputNumero;

       alert(`O soma deu: ${soma}`);
    }
    
    
} while (inputNumero != 0);

alert("Saiu...");
