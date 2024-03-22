﻿# Projeto-Bank
 
O código JavaScript fornecido importa as classes Clientee ContaCorrentede módulos separados ( Cliente.jse ContaCorrente.js). Em seguida, ele cria duas instâncias da Clienteclasse, cliente1e cliente2, com nomes e números de CPF correspondentes.
Posteriormente, ele cria uma instância da ContaCorrenteclasse chamada ContaCorrenteRicardo, associada cliente1a um número de conta. Um depósito inicial de 500 unidades é feito nesta conta. Outra ContaCorrenteinstância nomeada conta2é criada, associada a cliente2um número de conta diferente. É feita uma transferência de 200 unidades de ContaCorrenteRicardopara conta2. Finalmente, o código registra a numeroDeContaspropriedade da ContaCorrenteclasse no console.

O código JavaScript fornecido define uma ContaCorrenteclasse exportada de um módulo. Esta classe representa uma conta bancária e inclui propriedades e métodos para gerenciar operações de conta.
Os principais recursos da ContaCorrenteclasse incluem:
Propriedades estáticas:
numeroDeContas: uma propriedade estática para controlar o número total de contas criadas.
Propriedades da instância:
agencia: Representa a agência da conta.
_cliente: Representa o titular da conta. É uma propriedade privada acessada através de métodos getter e setter.
Métodos getter e setter:
cliente: métodos getter e setter para acessar e definir o titular da conta. O setter garante que o valor fornecido seja uma instância da Clienteclasse.
Propriedade privada:
_saldo: Representa o saldo da conta. É uma propriedade privada acessada através de um método getter.
Construtor:
Inicializa as propriedades agenciae _clienteda conta. Incrementa a numeroDeContaspropriedade estática para rastrear o número total de contas.
Métodos:
sacar(valor): Permite retirar fundos da conta se o saldo for suficiente.
depositar(valor): Permite depositar fundos na conta.
transferir(valor, conta): transfere fundos da conta corrente para outra conta especificada.
No geral, a ContaCorrenteclasse fornece uma estrutura básica para gerenciamento de contas bancárias, incluindo depósito, retirada e transferência de fundos. Além disso, ele controla o número total de contas criadas por meio da numeroDeContaspropriedade estática.
