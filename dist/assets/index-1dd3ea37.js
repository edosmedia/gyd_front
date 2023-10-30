(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i={dev:{baseUrlApi:"http://test-ws.sial.cl:3113/v1/",token:"token"},prod:{baseUrlApi:"URL",token:"token"}},c="dev",d=i[c].baseUrlApi,u=i[c].token;async function p(n){try{const o=await fetch(`${d}autentificacion/`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify(n)}),r=await o.json(),s={status:o.status,data:r};if(o.status===200){const e=r.token;let t=JSON.stringify(r);localStorage.setItem("profile",t),localStorage.setItem("token",e),console.log("Login Exitoso"),console.log("Token de autenticación:",e)}else if(o.status===401)console.error("Error de autenticación");else if(o.status===400){const e=await o.json();throw new Error(`Error en la solicitud: ${e.message}`)}else throw new Error("Error en la solicitud");return s}catch(o){throw console.error(o.message),o}}const m=()=>(document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("flogin");n?n.onsubmit=r=>{r.preventDefault(),o()}:console.error("El formulario no se encontró en el DOM.");const o=async r=>{const s=document.getElementById("correo"),e=document.getElementById("contrasena");if(!s||!e){console.error("No se encontraron los campos de correo y contraseña en el DOM.");return}const t={usuario:s.value,password:e.value};if(s.value===""||e.value==="")return;let a=await p(t);console.log(a)}}),`  <div class="container-fluid p-0">
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
  </div>`),l=[{path:"/",component:{render:()=>m()}}];function f(){const n=window.location.pathname,o=l.find(r=>r.path===n);return{route:o,component:o?o.component:null}}const g={routes:l,match:f},h=()=>{const{route:n,component:o}=g.match();return o.render()};document.querySelector("#app").innerHTML=h();
