import { useEffect, useState } from "react";
import { useProdutoDataMutate } from "../hooks/useProdutoDataMutate";
import { ProdutosData } from "../interface/ProdutosData";

import "./modal.css"

interface ModalProps {
  closeModal(): void;
  editingProduto?: ProdutosData | null; 
  onUpdate?(produtoData: ProdutosData): void;
}

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(event) => updateValue(event.target.value)}></input>
    </>
  );
};

export function CreateModal({ closeModal, editingProduto, onUpdate }: ModalProps) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const { mutate, isSuccess, isLoading } = useProdutoDataMutate();

  useEffect(() => {
    if (editingProduto) {
      setTitulo(editingProduto.titulo || "");
      setPreco(editingProduto.preco || 0);
      setImagem(editingProduto.imagem || "");
      setDescricao(editingProduto.descricao || "");
    }
  }, [editingProduto]);

  const enviar = () => {
    const produtosData: ProdutosData = {
      titulo,
      imagem,
      descricao,
      preco,
      id: editingProduto?.id 
    };

    if (editingProduto) {
      onUpdate?.(produtosData);
    } else {
      mutate(produtosData);
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>{editingProduto ? 'Editar Produto' : 'Adicionar Novo Produto'}</h2>
        <form className="input-container">
          <Input label="Titulo" value={titulo} updateValue={setTitulo} />
          <Input label="Imagem" value={imagem} updateValue={setImagem} />
          <Input label="Descriçao" value={descricao} updateValue={setDescricao} />
          <Input label="Preço" value={preco} updateValue={setPreco} />
        </form>
        <button onClick={enviar} className="btn-secondary">
          {isLoading ? "Salvando" : "Salvar"}
        </button>
        <button onClick={closeModal} className="btn-secondary">Voltar
        </button>
      </div>
    </div>
  );
}
