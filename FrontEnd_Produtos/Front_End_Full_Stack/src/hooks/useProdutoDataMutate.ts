import axios, { AxiosPromise } from "axios"
import { ProdutosData } from "../interface/ProdutosData";
import { useMutation, useQueryClient } from "react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: ProdutosData): AxiosPromise<any> => {
    try {
        const response = await axios.post(API_URL + '/Produtos', data);
        return response;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        throw error;  
    }
}


export function useProdutoDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 1,
        onError: (error) => {
            console.error("Erro durante a mutação:", error);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["produtos-data"])
        }
    })

    return mutate;
}

