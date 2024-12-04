import app_routes from "./app";
import auth_routes from "./auth";

const routes=[
    ...app_routes,
    ...auth_routes,

];

export default routes;