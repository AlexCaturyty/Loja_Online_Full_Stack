import { useState } from 'react';
import './App.css';
import { CardProdutos } from './components/CardProdutos/cardProdutos';
import { useProdutosData } from './hooks/useProdutosData';
import { CreateModal } from './create-modal/create-modal';
import { useDeleteProduto } from './hooks/useDeleteProduto';
import { useUpdateProduto } from './hooks/useUpdateProduto';
import { ProdutosData } from './interface/ProdutosData';

function App() {
  const { data } = useProdutosData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduto, setEditingProduto] = useState<ProdutosData | null>(null);
  const deleteMutation = useDeleteProduto();
  const updateMutation = useUpdateProduto();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setEditingProduto(null); 
  };

  const handleEditItem = (produtoData: ProdutosData) => {
    setEditingProduto(produtoData);
    setIsModalOpen(true);
  };

  const handleDeleteItem = (id?: number) => {
    deleteMutation.mutate(id);
  };

  const handleUpdateItem = (produtoData: ProdutosData) => {
    updateMutation.mutate(produtoData);
    setIsModalOpen(false); 
  };

  return (
    <div className="Container">
      <h1>Produtos da loja</h1>
      <div className="grid-produtos">
        {data?.map((produtoData) => (
          <CardProdutos
            key={produtoData.id}
            id={produtoData.id}
            titulo={produtoData.titulo}
            imagem={produtoData.imagem}
            descricao={produtoData.descricao}
            preco={produtoData.preco}
            onDelete={() => handleDeleteItem(produtoData.id)}
            onUpdate={() => handleEditItem(produtoData)} 
          />
        ))}
        {isModalOpen && (
          <CreateModal
            closeModal={() => setIsModalOpen(false)}
            editingProduto={editingProduto}
            onUpdate={handleUpdateItem}
          />
        )}
        <button className='btnAdd' onClick={handleOpenModal}>Novo Produto</button>
      </div>
    </div>
  );
}
export default App;
