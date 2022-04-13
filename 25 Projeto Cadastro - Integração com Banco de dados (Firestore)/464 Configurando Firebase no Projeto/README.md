# Configurando Firebase no Projeto
A configuração do Firebase foi setada no arquivo ".env.local". Este serve para guardar variáveis de ambientes que contém dados sigilosos, por isso não foi commitada para o GitHub

## Dados do arquivo ".env.local"
O arquivo possui três chaves na qual os valores estão disponíveis na Firebase:
```
NEXT_PUBLIC_FIREBASE_API_KEY=valor,
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=valor,
NEXT_PUBLIC_FIREBASE_PROJECT_ID=valor
```

## Setando o Firebase no Projeto
A configuração do Firebase foi feita em src/firebase/config.ts
```ts
import firebase from "firebase";
import "firebase/firestore"

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        autoDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}
```

