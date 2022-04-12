# Modelos de Pré-Renderização
O principal destaque do framework Next é os seus modelos de pré-renderização.

## Renderização do lado do cliente
O cliente quando acessa uma página, manda uma requisição para o servidor na qual lhe retorna um HTML básico. Dentro desse HTML, há um script na qual será injetado para renderizar a página inteira, criando assim uma Single Page Application (SPA). Contudo, isso não faz parte da pré-renderização oferecida pelo Next.js.

## Geração de Conteúdo Estática (Static Generation) - Recomendada
Durante o processo de Build, um arquivo HTML contendo todo o conteúdo será gerado na qual será servido á cada requisição. Isso facilita o trabalho de Search Engines.

## Renderização do Lado do Servidor (Server Side Rendering)
Para cada requisição, o servidor irá renderizar uma página HTML e retornar ao usuário. Consome bastante recursos.