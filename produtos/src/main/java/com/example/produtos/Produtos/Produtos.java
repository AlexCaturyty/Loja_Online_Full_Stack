package com.example.produtos.Produtos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;  // Adicione esta importação

@Table(name = "produtos")
@Entity(name = "produtos")
@Getter
@Setter  
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produtos {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    
    private String imagem;
    
    private String descricao;
    
    private Integer preco;
    
    public Produtos(ProdutosRequestDTO data){
        this.titulo = data.titulo();
        this.imagem = data.imagem();
        this.descricao = data.descricao();
        this.preco = data.preco();
    }
}
