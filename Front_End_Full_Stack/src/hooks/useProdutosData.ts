import axios, { AxiosPromise } from "axios"
import { ProdutosData } from "../interface/ProdutosData";
import { useQuery } from "react-query";

const API_URL = "http://localhost:8080";

const fecthData = async (): AxiosPromise<ProdutosData[]> => {
    const response = axios.get(API_URL + '/Produtos');
    return response;
}

export function useProdutosData(){
    const query = useQuery({
        queryFn: fecthData,
        queryKey: ["produtos-data"],
        retry:2
    })


    return{
        ...query, 
        data: query.data?.data
    }
}