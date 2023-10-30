import "./style.css";
import routes from "./routes";
import logo from "/assets/images/logo/logo.png";

document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("logo").src = logo;
})
// Crea el componente raíz
const App = () => {
   // Obtiene la ruta actual utilizando la función match
   const { route, component } = routes.match();

   // Devuelve el HTML del componente correspondiente
   return component.render();
};

// Renderiza el componente raíz
document.querySelector("#app").innerHTML = App();