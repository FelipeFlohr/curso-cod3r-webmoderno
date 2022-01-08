// Módulo é uma abstração de códigos, na qual partes do código deverão
// ser exportadas e partes de código deverão ser importadas;
// Em Node, um arquivo representa um módulo.

// Exportando um módulo
this.ola = "Fala Pessoal!" // Dentro do módulo, usando o "this" no global é nada mais que uma referência ao Node
exports.bemVindo = "Bem vindo ao Node!"
module.exports.ateLogo = "Até logo."