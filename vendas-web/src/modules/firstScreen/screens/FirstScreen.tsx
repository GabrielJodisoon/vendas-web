import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../../product/routes';

const FirtScreen = () => {
    const { user } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(ProductRoutesEnum.PRODUCT)
        }

    }, [])


    return <Spin></Spin>

}

export default FirtScreen;