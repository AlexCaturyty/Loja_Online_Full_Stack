package com.example.produtos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.produtos.Produtos.Produtos;
import com.example.produtos.Produtos.ProdutosRequestDTO;
import com.example.produtos.Produtos.ProdutosResponseDTO;
import com.example.produtos.repository.ProdutoRepository;

@RestController // mapeia o controller
@RequestMapping("Produtos")
public class ProdutosController {

    @Autowired
    private ProdutoRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ProdutosResponseDTO> getAll() {

        List<ProdutosResponseDTO> listaDeProdutos = repository.findAll().stream().map(ProdutosResponseDTO::new)
                .toList();
        return listaDeProdutos;
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void CriarProduto(@RequestBody ProdutosRequestDTO data) {
        Produtos produtosData = new Produtos(data);
        repository.save(produtosData);

    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<ProdutosResponseDTO> getById(@PathVariable Long id) {
        Optional<Produtos> produtoOptional = repository.findById(id);

        return produtoOptional.map(produto -> ResponseEntity.ok(new ProdutosResponseDTO(produto)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<Void> atualizarProduto(@PathVariable Long id, @RequestBody ProdutosRequestDTO data) {
        Optional<Produtos> produtoOptional = repository.findById(id);

        return produtoOptional.map(produto -> {
            produto.setTitulo(data.titulo());
            produto.setImagem(data.imagem());
            produto.setDescricao(data.descricao());
            produto.setPreco(data.preco());
            repository.save(produto);
            return ResponseEntity.ok().<Void>build(); // Correção aqui
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerProduto(@PathVariable Long id) {
        Optional<Produtos> produtoOptional = repository.findById(id);

        return produtoOptional.map(produto -> {
            repository.delete(produto);
            return ResponseEntity.ok().<Void>build(); // Correção aqui
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
