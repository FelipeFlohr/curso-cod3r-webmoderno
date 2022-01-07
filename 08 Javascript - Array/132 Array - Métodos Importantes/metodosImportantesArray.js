const pilotos = [ "Vettel", "Alonso", "Raikkonen", "Massa" ]

pilotos.pop() // Remove o último elemento do array, nesse caso o Massa
pilotos.push("Verstappen") // Adiciona um elemento na última posição do Array
pilotos.shift() // Remove o primeiro elemento do Array, nesse caso o "Vettel"
pilotos.unshift("Hamilton") // Adiciona um elemento na primeira posição do Array
pilotos.splice(2, 0, "Bottas", "Massa") // O splice pode tanto adicionar como remover elementos. Nesse caso, adicionará no índice 2 removendo 0 elementos os valores "Bottas" e "Massa"
pilotos.splice(3, 1) // Remove um elemento a partir do índice 3
pilotos.slice(2) // Cria um array com todos os elementos a partir do índice 2.
pilotos.slice(1, 3) // Cria um array com todos os elementos entre o índice 1 e o índice 3