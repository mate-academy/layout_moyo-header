# Moyo header
Crie uma página HTML com o cabeçalho usando `flexbox` com base no [Mockup do Figma](https://www.figma.com/design/1sog2rmfyCjnVxkeZ3ptnc/MOYO---Header).

A página deve corresponder ao design de forma "Pixel Perfect": todos os tamanhos, cores e distâncias DEVEM ser iguais aos do design.

> Aqui estão as [Instruções da Tarefa de Layout](https://mate-academy.github.io/layout_task-guideline)

## Requisitos:

- redefina as margens padrão do navegador
- use a fonte [Roboto](https://fonts.google.com/specimen/Roboto): selecione APENAS o estilo **roman**, peso **medium (500)** e largura **normal** para incorporação. **ESSA ETAPA É IMPORTANTE, CASO CONTRÁRIO SEU TESTE AUTOMÁTICO PODE FALHAR. Veja a imagem no final do Readme.**
- use tags semânticas: `<header>`, `<img>`, `<nav>`, `<ul>`, `<li>` e `<a>`
- o cabeçalho deve ocupar toda a largura da página (não use margem horizontal)
- a altura deve ser definida para os links de navegação (não para o cabeçalho), pegue-a do design
- o conteúdo do cabeçalho deve estar centralizado verticalmente
- o logo também deve ser um link com uma imagem dentro (de [src/images](src/images)). Porém, não deve fazer parte do `<nav>`
- ❗️ o link azul com uma linha abaixo deve ter uma classe `is-active` além de quaisquer outras classes que você adicionar
- ❗️ adicione o atributo `data-qa="hover"` ao 4º link para fins de teste (`Laptops & computers`)
- a cor do link deve mudar no `:hover`
- use o `::after` e posicione-o em relação ao link com a classe `is-active`
- não use a propriedade `gap` do flex para os espaçamentos. Ela não é suportada nos testes, use `margin` no lugar
- não deve haver margens antes do primeiro e depois do último item da lista
- não copie simplesmente todos os estilos do Figma. Pense em quais deles são relevantes. Tamanhos irregulares (ex.: `line-height: 14.6px`) definitivamente são inúteis
- os links de navegação não devem ter nenhum padding, mas devem ter o texto centralizado

## Checklist

❗️ Substitua `<your_account>` pelo seu nome de usuário do GitHub e copie os links para a descrição do `Pull Request`:

- [LINK DA DEMO](https://AndersonBernardoS.github.io/layout_moyo-header/)
- [LINK DO RELATÓRIO DE TESTES](https://AndersonBernardoS.github.io/layout_moyo-header/report/html_report/)

❗️ Copie esta `Checklist` para a descrição do `Pull Request` após os links, e coloque `- [x]` antes de cada item conforme for verificando.

- [ ] A altura do cabeçalho é definida em 1 único lugar (para os links)
- [ ] O conteúdo está centralizado verticalmente (para qualquer altura de cabeçalho)
- [ ] CSS é usado para mostrar todas as letras em maiúsculas (não as digite assim no HTML)
- [ ] O logo é uma imagem envolvida por um link
- [ ] Uma **Variável CSS** é usada para a cor azul
- [ ] Um pseudo-elemento é usado para a linha azul abaixo do link ativo
- [ ] O código segue todas as [Regras de Estilo de Código ❗️](./checklist.md)
- [ ] A configuração do Google Fonts segue os requisitos.
![alt text](./assets/image.png)
