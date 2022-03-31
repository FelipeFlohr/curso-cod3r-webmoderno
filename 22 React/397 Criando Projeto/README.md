# Criando o Projeto React
Para criar o projeto React, foi instalado o "create-react-app" de forma global. Após isso, foi executado o seguinte comando no terminal:
```
npx create-react-app exercicios
```

## JSX
O seguinte código possui HTML escrito no JavaScript:
```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>React</h1>, document.getElementById("root"))
```
Isso pode ser feito através do JSX (JavaScript eXtended), que transpila o código para JavaScript normal.