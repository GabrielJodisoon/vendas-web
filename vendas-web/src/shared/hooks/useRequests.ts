import axios from "axios";
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext";
import { connectionAPIPost } from "../functions/connection/connectionAPI";


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

    const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
        setLoading(true);
        const returnData = await connectionAPIPost<T>(url, body)
            .then((result) => {
                setNotification('Bem Vindo', 'success')
                return result;
            })
            .catch((error: Error) => {
                setNotification(error.message, 'error')
                return undefined;
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