(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const r={dev:{baseUrlApi:"http://test-ws.sial.cl:3113/v1/",token:"token"},prod:{baseUrlApi:"URL",token:"token"}},d="dev",n=r[d].baseUrlApi,p=r[d].token;async function v(t){try{const a=await fetch(`${n}autentificacion/`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify(t)}),i=await a.json(),l={status:a.status,data:i};if(a.status===200){const e=i.token;let s=JSON.stringify(i);localStorage.setItem("profile",s),localStorage.setItem("token",e),console.log("Login Exitoso"),console.log("Token de autenticación:",e)}else if(a.status===401)console.error("Error de autenticación");else if(a.status===400){const e=await a.json();throw new Error(`Error en la solicitud: ${e.message}`)}else throw new Error("Error en la solicitud");return l}catch(a){throw console.error(a.message),a}}const m=()=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("flogin");t?t.onsubmit=i=>{i.preventDefault(),a()}:console.error("El formulario no se encontró en el DOM.");const a=async i=>{const l=document.getElementById("correo"),e=document.getElementById("contrasena");if(!l||!e){console.error("No se encontraron los campos de correo y contraseña en el DOM.");return}const s={usuario:l.value,password:e.value};let o=await v(s);l.value===""||e.value===""||(o.status===200&&location.assign("/dashboard"),console.log(o))}}),`  <div class="container-fluid p-0">
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
                <a class="ms-2" href="/registro">
                  Crear una cuenta
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);async function u(t){try{const a=await fetch("http://test-ws.sial.cl:3113/v1/RegitroCliente/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await a.json(),l={status:a.status,data:i};if(a.status===200)console.log("Creación exitosa");else{const e=await a.json();throw new Error(`Error en la solicitud: ${e.message}`)}return console.log(l.status),l}catch{throw new Error("Error en la solicitud")}}async function f(t){try{const a=await fetch(`http://test-ws.sial.cl:3112/v1/CodigoReferido?id=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(a.status===200&&console.log("Exite del Referido"),a.status===400)console.log("Referido no exite");else{const i=await a.json();throw new Error(`Error en la solicitud: ${i.message}`)}return a.status}catch{throw new Error("Error en la solicitud")}}const g=()=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("fomulario_registro"),a=document.getElementById("mensaje"),i=document.getElementById("numero_ref").value;setInterval(()=>{if(i.length<6)return console.error("El número de referencia debe tener al menos 6 caracteres"),!1;if(i.length>10)return console.error("El número de referencia debe tener ser menor a 10 caracteres"),!1;switch(f(i)){case 200:return console.log("Número de Referido válido"),!0;case 404:return console.log("Número de Referido no válido"),!1;default:return console.log("Error en el servicio"),!1}},1e4),t.onsubmit=e=>{e.preventDefault();const s={nombre:document.getElementById("nombre").value,apellido:document.getElementById("apellido").value,direccion:document.getElementById("direccion").value,ciudad:document.getElementById("ciudad").value,estado:document.getElementById("estado").value,numero_telefonico:document.getElementById("numero_telefonico").value,email:document.getElementById("email").value,nro_referido:document.getElementById("numero_ref").value,zip_code:document.getElementById("codigopostal").value,usuario:document.getElementById("email").value,password:document.getElementById("password").value};!s.nombre||!s.apellido||!s.direccion||!s.ciudad||!s.estado||!s.email||!s.numero_telefonico||!s.password?a.innerHTML="Por favor, complete todos los campos excepto Número de referencia que es opcional":(u(s),console.log("Datos del formulario enviados:",s))}}),`<div class="container-fluid p-0">
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
  </div>`),h=()=>`<div class="page-wrapper compact-wrapper" id="pageWrapper">
    <!-- Page Header Start-->
    <div class="page-header">
      <div class="header-wrapper row m-0">
        <form class="form-inline search-full col" action="#" method="get">
          <div class="form-group w-100">
            <div class="Typeahead Typeahead--twitterUsers">
              <div class="u-posRelative">
                <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Cuba .." name="q" title="" autofocus>
                <div class="spinner-border Typeahead-spinner" role="status"><span class="sr-only">Loading...</span></div><i class="close-search" data-feather="x"></i>
              </div>
              <div class="Typeahead-menu"></div>
            </div>
          </div>
        </form>
        <div class="header-logo-wrapper col-auto p-0">
          <div class="logo-wrapper"><a href="#"><img class="img-fluid" src="../" alt=""></a></div>
          <div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="align-center"></i></div>
        </div>
        <div class="left-header col horizontal-wrapper ps-0">
        </div>
        <div class="nav-right col-8 pull-right right-header p-0">
          <ul class="nav-menus">
            <li class="language-nav">
              <div class="translate_wrapper">
                <div class="current_lang">
                  <!-- <div class="lang"><i class="flag-icon flag-icon-us"></i><span class="lang-txt">EN </span></div> -->
                </div>
              </div>
            </li>
            <li> <span class="header-search"><i data-feather="search"></i></span></li>
  
            <!-- <li class="onhover-dropdown">
              <div class="notification-box"><i data-feather="star"></i></div>
              <div class="onhover-show-div bookmark-flip">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="front">
                      <ul class="droplet-dropdown bookmark-dropdown">
                        <li class="gradient-primary"><i data-feather="star"></i>
                          <h6 class="f-18 mb-0">Bookmark</h6>
                        </li>
                        <li>
                          <div class="row">
                            <div class="col-4 text-center"><i data-feather="file-text"></i></div>
                            <div class="col-4 text-center"><i data-feather="activity"></i></div>
                            <div class="col-4 text-center"><i data-feather="users"></i></div>
                            <div class="col-4 text-center"><i data-feather="clipboard"></i></div>
                            <div class="col-4 text-center"><i data-feather="anchor"></i></div>
                            <div class="col-4 text-center"><i data-feather="settings"></i></div>
                          </div>
                        </li>
                        <li class="text-center">
                          <button class="flip-btn" id="flip-btn">Add New Bookmark</button>
                        </li>
                      </ul>
                    </div>
                    <div class="back">
                      <ul>
                        <li>
                          <div class="droplet-dropdown bookmark-dropdown flip-back-content">
                            <input type="text" placeholder="search...">
                          </div>
                        </li>
                        <li>
                          <button class="d-block flip-back" id="flip-back">Back</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li> -->
            <li>
              <div class="mode"><i class="fa fa-moon-o"></i></div>
            </li>
            <!-- <li class="cart-nav onhover-dropdown">
              <div class="cart-box"><i data-feather="shopping-cart"></i><span class="badge rounded-pill badge-primary">2</span></div>
              <ul class="cart-dropdown onhover-show-div">
                <li>
                  <h6 class="mb-0 f-20">Shoping Bag</h6><i data-feather="shopping-cart"></i>
                </li>
                <li class="mt-0">
                  <div class="media"><img class="img-fluid rounded-circle me-3 img-60" src="../assets/images/ecommerce/01.jpg" alt="">
                    <div class="media-body"><span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>
                      <p>Yellow(#fcb102)</p>
                      <div class="qty-box">
                        <div class="input-group"><span class="input-group-prepend">
                            <button class="btn quantity-left-minus" type="button" data-type="minus" data-field=""><i data-feather="minus"></i></button></span>
                          <input class="form-control input-number" type="text" name="quantity" value="1"><span class="input-group-prepend">
                            <button class="btn quantity-right-plus" type="button" data-type="plus" data-field=""><i data-feather="plus"></i></button></span>
                        </div>
                      </div>
                      <h6 class="text-end text-muted">$299.00</h6>
                    </div>
                    <div class="close-circle"><a href="#"><i data-feather="x"></i></a></div>
                  </div>
                </li>
                <li class="mt-0">
                  <div class="media"><img class="img-fluid rounded-circle me-3 img-60" src="../assets/images/ecommerce/03.jpg" alt="">
                    <div class="media-body"><span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>
                      <p>Yellow(#fcb102)</p>
                      <div class="qty-box">
                        <div class="input-group"><span class="input-group-prepend">
                            <button class="btn quantity-left-minus" type="button" data-type="minus" data-field=""><i data-feather="minus"></i></button></span>
                          <input class="form-control input-number" type="text" name="quantity" value="1"><span class="input-group-prepend">
                            <button class="btn quantity-right-plus" type="button" data-type="plus" data-field=""><i data-feather="plus"></i></button></span>
                        </div>
                      </div>
                      <h6 class="text-end text-muted">$299.00</h6>
                    </div>
                    <div class="close-circle"><a href="#"><i data-feather="x"></i></a></div>
                  </div>
                </li>
                <li>
                  <div class="total">
                    <h6 class="mb-2 mt-0 text-muted">Order Total : <span class="f-right f-20">$598.00</span></h6>
                  </div>
                </li>
                <li><a class="btn btn-block w-100 mb-2 btn-primary view-cart" href="cart.html">Go to shoping bag</a><a class="btn btn-block w-100 btn-secondary view-cart" href="checkout.html">Checkout</a></li>
              </ul>
            </li> -->
            <li class="maximize"><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize"></i></a></li>
            <li class="profile-nav onhover-dropdown p-0 me-0">
              <div class="media profile-media"><img class="b-r-10" src="../assets/images/dashboard/profile.jpg" alt="">
                <div class="media-body"><span>Sofia Rodriguez</span>
                  <p class="mb-0 font-roboto">Admin <i class="middle fa fa-angle-down"></i></p>
                </div>
              </div>
              <ul class="profile-dropdown onhover-show-div">
                <li><a href="#"><i data-feather="user"></i><span>Cuenta </span></a></li>
                <li><a href="#"><i data-feather="settings"></i><span>Ajuste</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
        <script class="result-template" type="text/x-handlebars-template">
              <div class="ProfileCard u-cf">                        
              <div class="ProfileCard-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay m-0"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></div>
              <div class="ProfileCard-details">
              <div class="ProfileCard-realName">{{name}}</div>
              </div>
              </div>
            <\/script>
        <script class="empty-template" type="text/x-handlebars-template"><div class="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div><\/script>
      </div>
    </div>
    <!-- Page Header Ends                              -->
    <!-- Page Body Start-->
    <div class="page-body-wrapper">
      <!-- Page Sidebar Start-->
      <div class="sidebar-wrapper">
        <div>
          <div class="logo-wrapper"><a href="index.html"><img class="img-fluid for-light" id="logo" alt=""><img  id="logo"class="img-fluid for-dark"  alt=""></a>
            <div class="back-btn"><i class="fa fa-angle-left"></i></div>
            <div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
          </div>
          <nav class="sidebar-main">
            <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
            <div id="sidebar-menu">
              <ul class="sidebar-links" id="simple-bar">
                <li class="sidebar-main-title">
                  <div>
                    <h6 class="lan-1">General</h6>
                    <p class="lan-2"></p>
                  </div>
                </li>
  
                <li class="sidebar-main-title">
                  <div>
                    <h6 class="lan-1">Inventario</h6>
                    <p class="lan-2"></p>
                  </div>
                </li>
  
                <li class="sidebar-main-title">
                  <div>
                    <h6 class="lan-1">Usuarios</h6>
                    <p class="lan-2"></p>
                  </div>
                </li>
                <li class="sidebar-list"><a class="sidebar-link sidebar-title" href="#"><i data-feather="file-text"></i><span>Hijo</span></a>
                </li>
  
          </nav>
        </div>
      </div>
      <!-- Page Sidebar Ends-->
      <div class="page-body">
        <div class="container-fluid">
          <div class="page-title">
            <div class="row">
              <div class="col-6">
                <h3>Pagina Principal</h3>
              </div>
              <div class="col-6">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html"> <i data-feather="home"></i></a></li>
                  <li class="breadcrumb-item">Dashboard</li>
                  <li class="breadcrumb-item active">Pagina Principal </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
  
          <div class="row second-chart-list third-news-update">
            <div class="col-xl-12 xl-100 chart_data_left box-col-12">
              <div class="card">
                <div class="card-body p-0">
                  <div class="row m-0 chart-main">
                    <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                      <div class="media align-items-center">
                        <div class="hospital-small-chart">
                          <div class="small-bar">
                            <div class="small-chart flot-chart-container"></div>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="right-chart-content">
                            <h4>1001</h4><span>compra </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                      <div class="media align-items-center">
                        <div class="hospital-small-chart">
                          <div class="small-bar">
                            <div class="small-chart1 flot-chart-container"></div>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="right-chart-content">
                            <h4>1005</h4><span>Ventas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                      <div class="media align-items-center">
                        <div class="hospital-small-chart">
                          <div class="small-bar">
                            <div class="small-chart2 flot-chart-container"></div>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="right-chart-content">
                            <h4>100</h4><span>Pedidos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                      <div class="media border-none align-items-center">
                        <div class="hospital-small-chart">
                          <div class="small-bar">
                            <div class="small-chart3 flot-chart-container"></div>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="right-chart-content">
                            <h4>101</h4><span>Pedidos Proccesado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-12 xl-50 morning-sec box-col-12">
              <div class="card o-hidden profile-greeting">
                <div class="card-body">
                  <div class="media">
                    <div class="badge-groups w-100">
                      <div class="badge f-12"><i class="me-1" data-feather="clock"></i><span id="txt"></span></div>
                      <div class="badge f-12"><i class="fa fa-spin fa-cog f-14"></i></div>
                    </div>
                  </div>
                  <div class="greeting-user text-center">
                    <div class="profile-vector"><img class="img-fluid" src="../assets/images/dashboard/welcome.png" alt=""></div>
                    <h4 class="f-w-600"><span id="greeting">Buenos dias</span> <span class="right-circle"><i class="fa fa-check-circle f-14 middle"></i></span></h4>
                    <!-- <p><span> Today's earrning is $405 & your sales increase rate is 3.7 over the last 24 hours</span></p> -->
  
                    <div class="left-icon"><i class="fa fa-bell"> </i></div>
                  </div>
                </div>
              </div>
            </div>
  
  
  
            <!-- <div class="col-xl-4 xl-50 notification box-col-6">
                  <div class="card">
                    <div class="card-header card-no-border">
                      <div class="header-top">
                        <h5 class="m-0">notification</h5>
                        <div class="card-header-right-icon">
                          <select class="button btn btn-primary">
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>Yesterday</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <div class="media">
                        <div class="media-body">
                          <p>20-04-2020 <span>10:10</span></p>
                          <h6>Updated Product<span class="dot-notification"></span></h6><span>Quisque a consequat ante sit amet magna...</span>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-body">
                          <p>20-04-2020<span class="ps-1">Today</span><span class="badge badge-secondary">New</span></p>
                          <h6>Tello just like your product<span class="dot-notification"></span></h6><span>Quisque a consequat ante sit amet magna... </span>
                        </div>
                      </div>
                      <div class="media">
                        <div class="media-body">
                          <div class="d-flex mb-3">
                            <div class="inner-img"><img class="img-fluid" src="../assets/images/notification/1.jpg" alt="Product-1"></div>
                            <div class="inner-img"><img class="img-fluid" src="../assets/images/notification/2.jpg" alt="Product-2"></div>
                          </div><span class="mt-3">Quisque a consequat ante sit amet magna...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
  
  
            <div class="col-xl-4 col-lg-12 xl-50 calendar-sec box-col-6">
              <div class="card gradient-primary o-hidden">
                <div class="card-body">
                  <div class="setting-dot">
                    <div class="setting-bg-primary date-picker-setting position-set pull-right"><i class="fa fa-spin fa-cog"></i></div>
                  </div>
                  <div class="default-datepicker">
                    <div class="datepicker-here" data-language="en"></div>
                  </div><span class="default-dots-stay overview-dots full-width-dots"><span class="dots-group"><span class="dots dots1"></span><span class="dots dots2 dot-small"></span><span class="dots dots3 dot-small"></span><span class="dots dots4 dot-medium"></span><span class="dots dots5 dot-small"></span><span class="dots dots6 dot-small"></span><span class="dots dots7 dot-small-semi"></span><span class="dots dots8 dot-small-semi"></span><span class="dots dots9 dot-small"> </span></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Container-fluid Ends-->
      </div>
      <!-- footer start-->
      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 footer-copyright text-center">
              <p class="mb-0">Copyright 2023 </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>`,b=()=>`<div class="tap-top"><i data-feather="chevrons-up"></i></div>
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
  </div>`,c=[{path:"/",component:{render:()=>m()}},{path:"/registro",component:{render:()=>g()}},{path:"/recuperacion_clave",component:{render:()=>b()}},{path:"/dashboard",component:{render:()=>h()}}];function y(){const t=window.location.pathname,a=c.find(i=>i.path===t);return{route:a,component:a?a.component:null}}const w={routes:c,match:y},x="/assets/logo-0116144d.png";document.addEventListener("DOMContentLoaded",()=>{document.getElementById("logo").src=x});const k=()=>{const{route:t,component:a}=w.match();return a.render()};document.querySelector("#app").innerHTML=k();
