# Usando API
O Next possui uma API integrada. Endpoints são criados da mesma maneira que as páginas e a sintaxe é simples:

pages/api/clientes/index.js = localhost:3000/clientes
```js
export default function handler(req, res) {
    const handleGet = (req, res) => {
        res.status(204).send() // Status = No Content
    }

    if (req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send() // Status = Method Not Allowed
    }
}
```

pages/api/clientes/[codigo].js = localhost:3000/clientes/[*código para ser passado*]
```js
export default function handler(req, res) {
    res.status(200).json({
        id: req.query.codigo, // Nome do arquivo
        nome: `Jane Doe #${req.query.codigo}`,
        email: `janedoe${req.query.codigo}@xcfmail.com`
    })
}
```

pages/api/hello.js = localhost:3000/api/hello?nome=[*valor*]&idade=[*valor*]
```js
export default function handler(req, res) {
	res.status(200).json({
		name: "Teste API",
		metodo: req.method,
		nome: req.query.nome,
		idade: req.query.idade
	})
}
```