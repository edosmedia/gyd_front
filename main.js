import "./style.css";
import routes from "./routes";
import logo from "/assets/images/logo/logo.png";
import "./assets/js/jquery-3.5.1.min.js";
import "./assets/js/bootstrap/bootstrap.bundle.min.js";
import "./assets/js/icons/feather-icon/feather.min.js";
import "./assets/js/icons/feather-icon/feather-icon.js";
import "./assets/js/config.js";
import "./assets/js/script.js";

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