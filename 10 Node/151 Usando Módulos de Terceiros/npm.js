/**
 * No Node, para instalar módulos de terceiro, usa-se o "npm" (Node
 * Package Manager), o gerenciador de pacotes do Node. Para instalar
 * um pacote no Node, usa-se "npm i [nome do pacote]". De início foi
 * instalado o "Lodash". Para instalar um módulo globalmente, usa-se
 * "npm i -g [nome do pacote]"
 */

// Importando um módulo
const _ = require("lodash")
console.log(_.random(1, 1000))

/**
 * O módulo "nodemon" foi instalado globalmente. Este módulo tem a
 * função de atualizar automáticamente o código assim que alguma
 * alteração é feita. O mesmo foi utilizado através do terminal com
 * o comando "nodemon [nome do script].js"
 */