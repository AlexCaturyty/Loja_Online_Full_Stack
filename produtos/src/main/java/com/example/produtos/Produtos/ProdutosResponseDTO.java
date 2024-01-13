package com.example.produtos.Produtos;

public record ProdutosResponseDTO(Long id, String titulo, String imagem, String descricao, Integer preco) {
    
    public ProdutosResponseDTO(Produtos produtos){
        this(produtos.getId(), produtos.getTitulo(), produtos.getImagem(), produtos.getDescricao(), produtos.getPreco());
    }
}
