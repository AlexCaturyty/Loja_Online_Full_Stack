import { ProdutosData } from "../../interface/ProdutosData";
import "./cardProdutos.css";


interface CardProps {
  id?: number;
  titulo: string;
  imagem: string;
  descricao: string;
  preco: number;
  onDelete: (id?: number) => void;
  onUpdate: (produtoData: ProdutosData) => void; 
}

export function CardProdutos({ id, titulo, imagem, descricao, preco, onDelete, onUpdate }: CardProps) {
  const handleDelete = () => {
    onDelete(id); 
  };

  const handleUpdate = () => {
    const updatedProdutoData: ProdutosData = {
      id,
      titulo, 
      imagem,
      descricao,
      preco,
    };
    onUpdate(updatedProdutoData);
  };

  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>
        <b>Valor: R$</b> {preco}
      </p>
              <button className="BtnDeletar" onClick={handleDelete}>Deletar</button>
              <button className="BtnAtualizar" onClick={() => handleUpdate()}>Atualizar</button>

    </div>
  );
}
