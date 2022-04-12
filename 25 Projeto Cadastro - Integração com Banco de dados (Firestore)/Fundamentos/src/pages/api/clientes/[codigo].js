export default function handler(req, res) {
    res.status(200).json({
        id: req.query.codigo, // Nome do arquivo
        nome: `Jane Doe #${req.query.codigo}`,
        email: `janedoe${req.query.codigo}@xcfmail.com`
    })
}