import { RouteObject } from "react-router-dom";
import FirtScreen from "./screens/FirstScreen";

export enum FirstScreenRouteEnum {
    FIRSTSCREEN = '/'
}


export const firstScreenRoute: RouteObject[] = [
    {
        path: FirstScreenRouteEnum.FIRSTSCREEN,
        element: <FirtScreen />,
        errorElement: <div>Pagina nao encontrada</div>,
    },
];

