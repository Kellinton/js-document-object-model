// Fazer um algoritmo para contar os número ímpares no intervalo [0, 250].

let numerosImpares = 0;

const contarNumerosImpares = () => {
    for (let i = 0; i <= 250; i++) {

        if(i % 2 == 1){

            numerosImpares++
        }
        
    }

   return numerosImpares;
}

alert(`São ${contarNumerosImpares()} números ímpares.`);
