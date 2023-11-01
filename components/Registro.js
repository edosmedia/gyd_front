import { auth } from "../services/auth";
import { creationUser } from "../services/creationuser";
import { getRef } from "../services/getRef";

const Registro = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fomulario_registro");
    const mensaje = document.getElementById("mensaje");
    const nro_referido = document.getElementById("numero_ref").value;
    const verificacionLongitud = () => {
      if (nro_referido.length < 6) {
        console.error("El número de referencia debe tener al menos 6 caracteres");
        return false;
      }
      if (nro_referido.length > 10) {
        console.error("El número de referencia debe tener ser menor a 10 caracteres");
        return false;
      }

      const resultado = getRef(nro_referido);

      switch (resultado) {
        case 200:
          console.log("Número de Referido válido");
          return true;
        case 404:
          console.log("Número de Referido no válido");
          return false;
        default:
          console.log("Error en el servicio");
          return false;
      }
    };
    setInterval(verificacionLongitud, 10000);

    form.onsubmit = (e) => {
      e.preventDefault();
      const formData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        direccion: document.getElementById("direccion").value,
        ciudad: document.getElementById("ciudad").value,
        estado: document.getElementById("estado").value,
        numero_telefonico: document.getElementById("numero_telefonico").value,
        email: document.getElementById("email").value,
        nro_referido: document.getElementById("numero_ref").value,
        zip_code: document.getElementById("codigopostal").value,
        usuario: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      // Validación de campos (excepto numero_ref)
      if (!formData.nombre || !formData.apellido || !formData.direccion || !formData.ciudad || !formData.estado || !formData.email || !formData.numero_telefonico || !formData.password) {
        mensaje.innerHTML = "Por favor, complete todos los campos excepto Número de referencia que es opcional";
      } else {
        // Aquí puedes realizar más acciones con los datos, como enviarlos a un servidor
        creationUser(formData);
        console.log("Datos del formulario enviados:", formData);
      }
    };
  });

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
              <form class="theme-form" id="fomulario_registro">
                <h4>Crear una cuenta</h4>
                <p>Ingrese sus datos personales para crear una cuenta</p>

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
                    <div class="col-12">
                      <input class="form-control" type="text" id="ciudad" required="" placeholder="Ciudad" />
                    </div>
                    <div class="col-12">
                      <input class="form-control" type="text" id="estado" required="" placeholder="Estado" />
                    </div>
                    <div class="col-12">
                      <input class="form-control" type="text" id="codigopostal" required="" placeholder="Codigo Postal" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Datos de Contacto</label>
                  <input class="form-control" type="email" name="email" id="email" required placeholder="Email" />
                  <input class="form-control" type="number" id="numero_telefonico" name="numero_telefonico" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="Telefono" maxLength="20" />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Contraseña</label>
                  <input class="form-control" type="password" name="password" id="password" required placeholder="*********" />
                </div>
                                
                <div class="form-group">
                  <label class="col-form-label pt-0">Numero de Referido (<b>Opcional</b>)</label>
                  <div class="row g-2">
                    <div class="col-12">
                      <input class="form-control" type="text" name="numero_ref" id="numero_ref" placeholder="Ej.81273" maxLength="12" minLength="6" onkeyup="verificacionLongitud()" />
                    </div>
                  </div>
                </div>
                <div id="mensaje"></div>
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
