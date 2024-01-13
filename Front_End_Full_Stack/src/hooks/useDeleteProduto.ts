
import axios, { AxiosPromise, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

const API_URL = "http://localhost:8080";

// ...

const deleteProduto = async (id?: number): AxiosPromise<AxiosResponse<any, any>> => {
    try {
      if (id === undefined) {
        console.error("ID é undefined");
        throw new Error("ID é undefined");
      }
  
      const response = await axios.delete(`${API_URL}/Produtos/${id}`);
      return response;
    } catch (error) {
      console.error("Erro na exclusão:", error);
      throw error;
    }
  }
  
  export function useDeleteProduto() {
    const queryClient = useQueryClient();
    const deleteMutation = useMutation(deleteProduto, {
      retry: 1,
      onError: (error) => {
        console.error("Erro durante a exclusão:", error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["produtos-data"]);
      },
    });
  
    return deleteMutation;
  }