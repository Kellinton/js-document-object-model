// Escreva um algoritmo que calcule a média dos números digitados pelo usuário, 
// se eles forem pares. Termine a leitura se o usuário digitar zero (0);

// const Aluno = require("./classes/Aluno"); CommonJS
// import { Aluno } from "./classes/Aluno";
// import { digitarNome, digitarNumero, escolherOpcao } from "./prompt";

function escolherOpcao(){
    return Number(prompt(`
    [ 0 ] Para Sair
    [ 1 ] Para Adicionar a ${contador}ª Nota
    [ 2 ] Para Calcular`));
}

function digitarNome(){
   return  prompt("Digite seu nome: ");
}

function digitarNumero(){
    return Number(prompt(`Digite a ${contador}ª nota: `));
}

const nome = digitarNome();
const notas = [];


let contador = 0;
let continuar = 1;
let decisao;

class Aluno {
    nome;
    notas;
    

    constructor(nome, notas){
        this.nome = nome,
        this.notas = notas
    }

    calcularMedia(){
        const notas = this.notas;
        let soma = 0;

        for (const nota of notas) {
            soma += nota
        }
        
        return soma / notas.length
    }
}

do { 
    contador++
    do {
        decisao = escolherOpcao();
    } while (decisao != 0 && decisao != 1 && decisao != 2);

    switch (decisao) {
        case 0:
            continuar = 0;
            break;
        case 1:
            notas.push(digitarNumero()); 

            break;
        case 2:     
            const aluno =  new Aluno(nome, notas);  
            const media = aluno.calcularMedia();

            if (notas.length === 0) {
                alert("Não há notas para calcular a média.");
            } else {
                alert(`A média do(a) ${aluno.nome} foi de: ${media}`);
            }

            continuar = 0
            break;
    }

} while (continuar != 0);





// require é uma função fornecida pelo CommonJS,
//  que é o sistema de módulos padrão no Node.js. 
//  O valor retornado por require é o valor exportado 
//  pelo módulo "./classes/Aluno", e esse valor 
//  é armazenado na variável Aluno.

