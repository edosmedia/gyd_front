import { auth } from "../services/auth";

const Recuperacion_c = () => {

  
   return `<div class="tap-top"><i data-feather="chevrons-up"></i></div>
  <!-- tap on tap ends-->
  <!-- page-wrapper Start-->
  <div class="page-wrapper">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-12">
          <div class="login-card">
            <div>
              <div><a class="logo" href="index.html"><img class="img-fluid for-light" style="width: 20vw;" src="../assets/images/logo/logo.png" alt="looginpage"><img style="width: 20vw;" class="img-fluid for-dark" src="../assets/images/logo/logo.png" alt="looginpage"></a></div>
              <div class="login-main">
                <form class="theme-form">
                  <h4>Restablecer su contraseña</h4>
                  <div class="form-group">
                    <label class="col-form-label">Introduzca su Email</label>
                    <div class="row">
                      <div class="col-12x col-sm-12">
                        <input class="form-control mb-1" type="email" value="micorreo@gmail.com">
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary btn-block m-t-10" type="submit">Solicitar</button>
                      </div>
                    </div>
                  </div>
  
  
                  <h6 class="mt-4">Crear contraseña</h6>
                  <div class="form-group">
                    <label class="col-form-label">Nueva Contraseña</label>
                    <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
                    <div class="show-hide"><span class="show"></span></div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Repetir Contraseña</label>
                    <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <button class="btn btn-primary btn-block" type="submit">Cambiar </button>
                    </div>
                    <p class="mt-4 mb-0">¿Ya tienes una contraseña?<a class="ms-2" href="/">Iniciar Seccion</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default Recuperacion_c;
