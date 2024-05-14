import { RouteObject } from "react-router-dom";
import FirtScreen from "./screens/FirstScreen";
import PageNotFound from "./screens/PageNotFound";

export enum FirstScreenRouteEnum {
    FIRSTSCREEN = '/'
}


export const firstScreenRoute: RouteObject[] = [
    {
        path: FirstScreenRouteEnum.FIRSTSCREEN,
        element: <FirtScreen />,
        errorElement: <PageNotFound></PageNotFound>,
    },
];

