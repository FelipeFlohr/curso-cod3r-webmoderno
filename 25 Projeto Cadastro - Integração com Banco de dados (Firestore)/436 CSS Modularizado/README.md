# CSS Modularizado
Um arquivo CSS será um módulo quando o sufixo do seu arquivo for ".module.css".

## Utilizando um arquivo "module.css"
Para utilizar um arquivo "*.module.css*" é necessário referencia-lô no componente. Veja o seguinte exemplo:

Arquivo CSS
```css
.roxo {
    background-color: #670bbd;
    color: #FFF;
}
```

Arquivo JSX
```jsx
import styles from "./Estiloso.module.css"

export default function Estiloso() {
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando Módulos CSS</h1>
        </div>
    )
}
```

**OBS.:** Módulos CSS não suportam seletores de tags