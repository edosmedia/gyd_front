import { auth } from "../services/auth";

const Registro = () => {


   return `<div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo" href="/">
                <img class="img-fluid for-light" id="logo" style="width: 20rem" />
              </a>
            </div>
            <div class="login-main">
              <form class="theme-form">
                <h4>Crear una cuenta</h4>
                <p>Ingrese sus datos personales para crear una cuenta</p>
  
                <div class="form-group">
                  <label class="col-form-label pt-0">Numero de Referido</label>
                  <div class="row g-2">
                    <div class="col-12">
                      <input class="form-control" type="text" name="numero_ref" id="numero_ref" placeholder="Ej.81273" required />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label pt-0">Tu Datos</label>
                  <div class="row g-2">
                    <div class="col-6">
                      <input class="form-control" type="text" name="nombre" id="nombre" placeholder="Nombre" required />
                    </div>
                    <div class="col-6">
                      <input class="form-control" type="text" name="apellido" id="apellido" required="" placeholder="Apellido" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label pt-0"> Tu Direccion</label>
                  <div class="row g-2">
                    <div class="col-12">
                      <input class="form-control" type="text" id="direccion" required="" placeholder="Direccion" />
                    </div>
                    <div class="col-6">
                      <input class="form-control" type="text" id="ciudad" required="" placeholder="Ciudad" />
                    </div>
                    <div class="col-6">
                      <input class="form-control" type="text" id="estado" required="" placeholder="Estado" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Datos de Contacto</label>
                  <input class="form-control" type="email" name="email" required="" placeholder="Email" />
                  <input class="form-control" type="number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="Telefono" maxLength={20} />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Contraseña</label>
                  <input class="form-control" type="password" name="password" required placeholder="*********" />
                </div>
  
                <div class="form-group mb-0">
                  <button class="btn btn-primary btn-block" type="submit">
                    Crear una cuenta
                  </button>
                </div>
  
                <p class="mt-4 mb-0">
                  ¿Ya tienes una cuenta?
                  <a class="ms-2" href="/">
                    Iniciar sesión
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default Registro;
