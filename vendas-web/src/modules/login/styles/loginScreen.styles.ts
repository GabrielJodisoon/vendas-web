import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;


export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;

`

export const TitleLogin = styled(Title)`
    color: #b44;
`

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    max-width: 70%;
    width: 68%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImg = styled.img`
    width: 202px;
    height: 202px;
    
`;


export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c9c9c9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    right: 0;
    top: 0;
    z-index: 2;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;

`