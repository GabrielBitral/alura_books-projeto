const secaoLivros = document.querySelector('#livros');
const elementoValorTotalLivros = document.getElementById('valor_total_livros_disponiveis');

const montarSecaoLivros = (livros) => {
    secaoLivros.innerHTML = '';
    elementoValorTotalLivros.innerHTML = '';
    livros.forEach((livro) => {
        let disponibilidade = livro.quantidade <= 0 ? 'indisponivel' : '';
        secaoLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}"
          alt=${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2).replace('.', ',')}</p>
        <div class="tags">
          <span class="tag">${livro.categoria.charAt(0).toUpperCase() + livro.categoria.substring(1)}</span>
        </div>
      </div>
        `
    })
}