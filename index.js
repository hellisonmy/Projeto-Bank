import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 22244455501);

const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

ContaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
ContaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);

