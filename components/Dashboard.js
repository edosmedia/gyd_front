import { auth } from "../services/auth";

const Dashboard = () => {

   return `<div class="page-wrapper compact-wrapper" id="pageWrapper">
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
            </script>
        <script class="empty-template" type="text/x-handlebars-template"><div class="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div></script>
      </div>
    </div>
    <!-- Page Header Ends                              -->
    <!-- Page Body Start-->
    <div class="page-body-wrapper">
      <!-- Page Sidebar Start-->
      <div class="sidebar-wrapper">
        <div>
          <div class="logo-wrapper"><a href="index.html"><img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt=""><img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt=""></a>
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
  </div>`;
};

export default Dashboard;
