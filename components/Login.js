import { auth } from "../services/auth";

const Login = () => {
  
   document.addEventListener("DOMContentLoaded", () => {
 
      const form = document.getElementById("flogin");
      if (form) {
         form.onsubmit = (e) => {
            e.preventDefault();
            handleSubmit();
         };
      } else {
         console.error("El formulario no se encontró en el DOM.");
      }

      const handleSubmit = async (e) => {
         const correo = document.getElementById("correo");
         const password = document.getElementById("contrasena");

         if (!correo || !password) {
            console.error("No se encontraron los campos de correo y contraseña en el DOM.");
            return;
         }

         const data = {
            usuario: correo.value,
            password: password.value,
         };

         if (correo.value === "" || password.value === "") {
            return;
         }

         let req = await auth(data);
         console.log(req);
      };
   });





   return `  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo" href="#">
                <img class="img-fluid" id="logo" style="width: 20rem"  alt="loginpage" />
              </a>
            </div>
            <div class="login-main">
              <form class="theme-form" id="flogin" >
                <h4>Iniciar sesión en la cuenta</h4>
                <p>Ingrese su correo electrónico y contraseña para iniciar sesión</p>
                <div class="form-group">
                  <label class="col-form-label">Correo Electronico</label>
                  <input class="form-control" id="correo"  type="email" required="" placeholder="micorreo@gmail.com" />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Contraseña</label>
                  <input class="form-control" id="contrasena" type="password" name="password" required="" placeholder="*********"></input>
                </div>
                <div class="checkbox p-0">
                  <a class="link" href="/contrasena_perdida/">
                    ¿Has olvidado tu contraseña?
                  </a>
                  <button class="btn btn-primary btn-block" type="submit">
                    Iniciar sesión
                  </button>
                </div>
              </form>
              <p id="error"></p>
              <p class="mt-4 mb-0">
                ¿No tienes cuenta?
                <a class="ms-2" href="/registro/">
                  Crear una cuenta
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default Login;
