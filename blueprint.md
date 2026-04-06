
# Blueprint: Painel de Monitoramento de Consumo de Energia (v6.1 - Refinamento Sci-Fi)

Este documento descreve o plano para a versão 6.1 do painel, focada em refinar a estética futurista, removendo a grade de fundo e a linha de varredura (scanline) para um visual mais limpo.

## Visão Geral

Com base no feedback, esta versão simplifica a interface Sci-Fi, mantendo os elementos mais sutis e eficazes: o fundo estrelado animado e os efeitos de brilho aprimorados.

## Design e Funcionalidades

### 1. **Design Visual (Interface Sci-Fi Refinada)**

*   **Fundo Estrelado Animado:** O fundo estrelado animado com efeito de paralaxe é mantido como o principal elemento visual.
*   **Efeitos de "Glow" Aprimorados:** O brilho (glow) nos cards e gráficos ao passar o mouse continua a ser o principal ponto de interação visual.
*   **Estilo Consistente:** A paleta de cores, tipografia e formas geométricas permanecem inalteradas.
*   **Removido:** A grade de fundo (grid) e a animação de linha de varredura (scanline) foram removidas.

### 2. **Componentes do Painel**

*   Todos os componentes existentes (cabeçalho, cards, gráficos, tabela, rodapé) são mantidos.

## Plano de Implementação

1.  **Atualizar `index.html`:** Remover os `divs` da malha de fundo e do efeito de scanline.
2.  **Atualizar `style.css`:** Remover os estilos e animações associados à malha e ao scanline.
3.  **`main.js`:** Nenhuma alteração necessária.
