import axios from "axios";
import { useState } from "react"


export const useRequests = () => {
    const [loading, setLoading] = useState(false);



    const getRequest = async (url: string,) => {
        setLoading(true);
        return await axios({
            method: "get",
            url: url,
        })
            .then((result) => {
                return result.data;
            })
            .catch(() => {
                alert("erro");
            });
    };

    const postRequest = async (url: string, body: any) => {
        setLoading(true);
        const returnData = await axios({
            method: "post",
            url: url,
            data: body,
        })
            .then((result) => {
                alert("logado com sucesso")
                return result.data;
            })
            .catch(() => {
                alert("usuario ou senha invalido");
            });
        setLoading(false);
        return returnData;

    };


    return {
        loading,
        getRequest,
        postRequest
    };
};