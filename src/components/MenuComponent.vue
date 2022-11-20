<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/empleados"
                  >Empleados</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  to="/insertar"
                  >INSERTAR</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenuComponent",
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped></style>