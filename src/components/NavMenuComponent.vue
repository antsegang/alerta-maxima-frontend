<template>
  <div class=" container-md  mt-3 container-fluid transparent my-container sticky-top">
    <nav class=" nav navbar-expand-lg d-md-block d-none bg-nav rounded-pill">
      <div class="container justify-content-center d-flex">
        <RouterLink class="nav-link my-text-link" to="/">Inicio</RouterLink>
        <RouterLink class="nav-link my-text-link" to="/about">Sobre nosotros</RouterLink>
        <RouterLink class="nav-link my-text-link" to="/services">Energía limpia</RouterLink>
        <RouterLink class="nav-link my-text-link" to="/services">Contra Incendios</RouterLink>
        <RouterLink class="nav-link my-text-link" to="/services">Electricidad</RouterLink>
        <RouterLink class="nav-link my-text-link" to="/services">Seguridad</RouterLink>
        <RouterLink class="nav-link my-text-link" to="/services">Portones</RouterLink>
      </div>
    </nav>
    <nav class="navbar my-nav fixed-top d-md-none d-f">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Alerta Máxima Sistemas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas bg-nav offcanvas-end" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title my-text-nav" id="offcanvasNavbarLabel">
              Alerta Máxima Sistemas
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink class="nav-link my-text-link" to="/">Inicio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link my-text-link" to="/about">Sobre nosotros</RouterLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle my-text-link" id="dropdownEL" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" href="#">Energía limpia</a>
                <div class="dropdown-menu" aria-labelledby="dropdownEL">
                  <a class="dropdown-item" href="#">Action 1</a>
                  <a class="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle my-text-link" id="dropdownCI" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" href="#">Contra incencios</a>
                <div class="dropdown-menu" aria-labelledby="dropdownCI">
                  <a class="dropdown-item" href="#">Action 1</a>
                  <a class="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle my-text-link" id="dropdownEle" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" href="#">Electricidad</a>
                <div class="dropdown-menu" aria-labelledby="dropdownEle">
                  <a class="dropdown-item" href="#">Action 1</a>
                  <a class="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle my-text-link" id="dropdownSe" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" href="#">Seguridad</a>
                <div class="dropdown-menu" aria-labelledby="dropdownSe">
                  <a class="dropdown-item" href="#">Action 1</a>
                  <a class="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle my-text-link" id="dropdownPo" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" href="#">Portones</a>
                <div class="dropdown-menu" aria-labelledby="dropdownPo">
                  <a class="dropdown-item" href="#">Action 1</a>
                  <a class="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


  </div>
</template>
<style scoped>
.my-text-nav {
  color: #f2f2f2;
}

.my-nav {
  background-color: #0d0d0d73;
}

.my-text-link {
  color: #f2f2f2;
  font-weight: normal;
  font-size: 1.3em;
  text-decoration: none;

}

.my-text-link:hover {
  color: #0d0d0d;
  font-weight: normal;
  font-size: 1.3em;
  text-shadow: #f2f2f2 7px 3px 5px;
}
</style>
