package com.example.produtos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.produtos.Produtos.Produtos;

public interface ProdutoRepository extends JpaRepository <Produtos, Long> {

}