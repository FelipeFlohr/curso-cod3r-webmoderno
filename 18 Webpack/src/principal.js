import Pessoa from "./pessoa"
import "./assets" // Dentro da pasta "assets", procurará pelo arquivo "index.js"

const pessoa = new Pessoa()
console.log(pessoa.cumprimentar())