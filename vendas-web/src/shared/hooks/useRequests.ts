import axios from "axios";
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext";


export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const { setNotification } = useGlobalContext();



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
                setNotification('Bem Vindo', 'success')
                return result.data;
            })
            .catch(() => {
                setNotification('senha invalida', 'error')
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