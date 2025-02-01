//Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(gets()); // Nível do monstro
let num2 = parseInt(gets()); // Dificuldade da batalha (1 a 100)

// TODO: Implemente a lógica para calcular o XP ganho
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
