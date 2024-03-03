let numero;
let continuar;

do {
    let input;
    do {
       input = prompt("Digite um número: ");

       numero = Number(input);
    
        if(isNaN(numero)){
            if (input === null || input === "") {
                // Sair do loop se o usuário clicou em "Cancelar" ou deixou em branco
                break;
            }
            alert("O valor precisa ser um número!");
        }
    
    } while (isNaN(numero));
    
    // Só continua se o usuário não clicou em "Cancelar" ou deixou em branco
    if(!continuar){ 
        break;
    }
    
    const verificarNumero = (numero) => {
        if(numero >= 0) {
            return `${numero} é Positivo.`;
        }
        return `${numero} é Negativo.`;
    }
    
    const resultado = verificarNumero(numero);
    alert(resultado);


    continuar = confirm('Deseja continuar?');
} while (continuar);