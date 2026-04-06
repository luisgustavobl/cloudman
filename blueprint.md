
# Blueprint: Painel de Monitoramento de Consumo de Energia (v6.3 - Refinamento do Rodapé)

Este documento descreve o plano para a versão 6.3 do painel, focada em refinar o design do rodapé para uma aparência mais integrada e escura.

## Visão Geral

Atendendo ao pedido do usuário, esta versão substitui a linha sólida na borda superior do rodapé por um gradiente sutil. Isso cria uma transição mais suave entre o conteúdo principal e o rodapé, reforçando a estética futurista.

## Design e Funcionalidades

*   **Rodapé:**
    *   A borda superior sólida (`border-top`) foi removida.
    *   Em seu lugar, foi aplicada uma `border-image` com um gradiente linear. O gradiente vai de transparente, passa pela cor de destaque (`--border-color`), e volta para transparente, criando um efeito de "brilho" na separação.
    *   O fundo do rodapé foi mantido escuro para garantir a legibilidade.

## Plano de Implementação

1.  **Atualizar `style.css`:** Modificar o seletor `footer` para remover a `border-top` sólida e adicionar as propriedades `border-image-source` e `border-image-slice` para criar o efeito de gradiente.
