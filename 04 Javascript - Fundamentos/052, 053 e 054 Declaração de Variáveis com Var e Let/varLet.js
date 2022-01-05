{
    {
        {
            {
                var variavelComVar = "Variável com Var!"
                console.log("Printando a variável com var dentro do bloco: " + variavelComVar)
            }
        }
    }
}

{ 
    {
        {
            {
                let variavelComLet = "Variável com Let!"
                console.log("Printando a variável com let dentro do bloco: " + variavelComLet)
            }
        }
    }
}

console.log("Printando a variável com Var fora do bloco: " + variavelComVar)
console.log("Printando a variável com Let fora do bloco: " + variavelComLet) // <- Irá retornar erro pois variáveis com Let são de escopo local
// Com isso, conclui-se que a diferença das duas é o escopo na qual
// atuam