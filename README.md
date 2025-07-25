# MLX 2025

Este projeto contempla as melhorias, ajustes visuais e alterações de conteúdo de texto solicitados diretamente pelo cliente MLX e Auclan Design, seguindo a última revisão do layout no Figma.

## Alterações realizadas

- **Exclusão da seção "hero scroller":**

  ```html
  <!--section hero scroller-->
  <section class="section-scroller">
    <div class="scroller-content"></div>
  </section>
  ```
  Esta seção foi removida conforme orientação do cliente.

- **Exclusão do card "Fusões e Aquisições" dos serviços:**

  ```html
  <!-- Card 1 -->
  <div class="service-card">
    <div class="service-card-image">
      <img
        src="./assets/img/img-espec-aquis-fusoes.webp"
        alt="Fusões e Aquisições"
      />
      <div class="service-card-overlay">
        <div class="service-card-text"><h4>Fusões e Aquisições</h4></div>
      </div>
    </div>
  </div>
  ```
  Card removido conforme nova revisão.

- **Ajuste no carregamento da imagem do banner da homepage:**
  - Otimização e correção do carregamento da imagem principal do banner, conforme especificado no Figma.
  - **Melhoria de performance:**  
    Adicionado o preload da imagem principal do banner:
    ```html
    <link rel="preload" href="./assets/img/bg-home-section.webp" as="image" />
    ```
    Explicação: O atributo `rel="preload"` faz o navegador priorizar o carregamento da imagem, e `as="image"` especifica que é uma imagem. Isso garante que ela esteja pronta quando o CSS for aplicado.

- **Lazy loading nas imagens dos cards de serviços:**
  ```html
  <img
    src="./assets/img/img-espec-cap-recursos.webp"
    alt="Captação de Recursos"
    loading="lazy"
  />
  <img
    src="./assets/img/img-espec-gest-recursos.webp"
    alt="Gestão de Recursos"
    loading="lazy"
  />
  ```
  Explicação: O atributo `loading="lazy"` reduz o consumo inicial de banda, permitindo que a imagem do hero carregue mais rápido.

- **Ajuste de responsividade na seção "CEO & CO-FOUNDER":**
  - Melhorias no layout responsivo dessa seção para garantir melhor visualização em dispositivos móveis e tablets.

- **Ajuste na seção de contatos do footer:**
  - Atualização das informações e layout da área de contatos no rodapé, conforme revisão do cliente.

- **Alterações de conteúdo de texto:**
  - Atualização e revisão dos textos das seções do site, incluindo títulos, descrições e chamadas para ação, conforme o conteúdo aprovado no Figma pelo cliente MLX e Auclan Design.

- **Ajuste no height do footer para posicionamento da imagem decorativa:**
  - O valor do `height` do footer foi ajustado para corrigir o posicionamento da imagem decorativa `<img class="vetor-footer" src="./assets/img/vetor-footer.svg" alt>`, que estava muito afastada da posição real conforme o projeto no Figma.

- **Exclusão do link "Facebook" do footer:**
  ```html
  <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
  ```
  O link para o Facebook foi removido da área de redes sociais do rodapé conforme revisão do cliente.

- **Ajuste no width dos cards de benefícios:**
  ```css
  .benefit-card {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .bnf-retornos {
    width: 271px;
  }
  .bnf-conexoes {
    width: 243px;
  }
  .bnf-foco {
    width: 234px;
  }
  .bnf-tendencia {
    width: 222px;
  }
  ```
  Os valores de `width` dos cards de benefícios foram ajustados para garantir o alinhamento e proporção visual conforme o projeto no Figma.

- **Inclusão de regras de SEO no `<head>` do HTML:**
  - Foram adicionadas meta tags de SEO, Open Graph e Twitter Card para melhorar o ranqueamento e compartilhamento do site.

- **Lógica para atualizar automaticamente o ano vigente no copyright:**
  ```javascript
  // Atualizar o ano no copyright automaticamente
  const copyrightElement = document.querySelector('.copyright');
  if (copyrightElement) {
      const currentYear = new Date().getFullYear();
      copyrightElement.textContent = `MLX Capital ${currentYear}. Todos os direitos reservados`;
  }
  ```
  Agora o ano exibido no rodapé é atualizado automaticamente via JavaScript.

---

Todas as alterações acima foram solicitadas pelo próprio cliente MLX e Auclan Design, e devem ser implementadas conforme o projeto revisado no Figma.

Para rodar seu projeto localmente em localhost:3000, utilize um dos comandos abaixo no terminal:

**Usando o pacote serve (Node.js):**
```sh
npx serve -l 3000 .
```

**Ou, se preferir o Live Server do VS Code:**
- Instale a extensão Live Server.
- Clique com o botão direito no index.html e selecione "Open with Live Server".
- Se necessário, configure a porta para 3000 nas opções da extensão.

Assim, o projeto ficará disponível em http://localhost:3000.