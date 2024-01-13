// useUpdateProduto.ts
import axios, { AxiosPromise } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ProdutosData } from '../interface/ProdutosData';

const API_URL = 'http://localhost:8080';

const updateProduto = async (produtoData: ProdutosData): AxiosPromise<any> => {
  try {
    const response = await axios.put(`${API_URL}/Produtos/${produtoData.id}`, produtoData);
    return response;
  } catch (error) {
    console.error('Erro na atualização:', error);
    throw error;
  }
};

export function useUpdateProduto() {
  const queryClient = useQueryClient();
  const updateMutation = useMutation(updateProduto, {
    retry: 1,
    onError: (error) => {
      console.error('Erro durante a atualização:', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['produtos-data']);
    },
  });

  return updateMutation;
}
