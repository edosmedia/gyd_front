import Login from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard" 
import Lost from "./components/Lost";

const routes = [
   {
      path: "/",
      component: {
         render: () => {
            return Login();
         },
      },
   },
   {
      path: "/registro",
      component: {
         render: () => {
            return Registro();
         },
      },
   },
   {
      path: "/recuperacion_contrasena",
      component: {
         render: () => {
            return Lost();
         },
      },
   },
   {
      path: "/dashboard",
      component: {
         render: () => {
            return Dashboard();
         },
      },
   },
];

function match() {
   const currentPath = window.location.pathname;
   const route = routes.find((route) => route.path === currentPath);
   return { route, component: route ? route.component : null };
}

export default {
   routes,
   match,
};
