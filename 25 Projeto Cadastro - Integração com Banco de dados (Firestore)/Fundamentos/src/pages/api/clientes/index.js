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