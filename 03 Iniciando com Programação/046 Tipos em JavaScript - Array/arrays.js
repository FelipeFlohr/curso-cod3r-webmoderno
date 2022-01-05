/**
 * Em JavaScript, Arrays são heterogeneos (ou seja, é possível colo-
 * car mais de um tipo dentro do Array, diferentemente de Java, por
 * exemplo).
 */
const valores = [7.7, 8.9, 6.3, 9.2]
console.log("Array = " + valores)

// Diferentemente de outras linguagens, quando se procura um valor
// com índice inexistente dentro de um Array no JavaScript, não re
// tornará erro, mas sim "undefinied"
console.log("Índice #4 do Array: " + valores[4])

// Também é possível com que o Array tenha elementos vazios entre
// um e outro, veja:
valores[10] = 10
console.log("\nRepare que no Array abaixo há 6 itens:")
console.log(valores)

// Também é possível inserir um ou mais elementos utilizando o
// método "push()"
valores.push({id: 3}, false, null, "teste")
console.log("\nArray após a inserção: " + valores)

// Para deletar elementos de uma array, pode-se utilizar o método
// "pop" ou a palavra reserva "delete"
console.log("\nRemovendo utilizando pop(): " + valores.pop()) // Remove o último elemento do array e retorna-o
delete valores[0]
console.log("Array após remover o índice #0: " + valores)

// Tipo do Array
console.log("\nTipo do array: " + typeof valores)