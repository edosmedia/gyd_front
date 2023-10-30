import Login from "./components/Login";

const routes = [
   {
      path: "/",
      component: {
         render: () => {
            return Login();
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
