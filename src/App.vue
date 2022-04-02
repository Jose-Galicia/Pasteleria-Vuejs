<template>
  <header class="header">
          <nav class="nav">                     
            <a href="index.html" class="logo nav-link">Buenavista</a>
            <button class="nav-toggle" aria-label="Abrir menu">
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul class="nav-menu">
                <li class="nav-menu-item">
                    <router-link class="nav-menu-link nav-link2" to="/">Inicio</router-link>
                </li>
                <li class="nav-menu-item">
                    <router-link class="nav-menu-link nav-link2" to="/Pasteles">Pasteles</router-link>
                </li>
                <li class="nav-menu-item">
                    <router-link class="nav-menu-link nav-link2" to="/Adornos">Adornados</router-link>
                </li>
               <!-- <li class="nav-menu-item">
                    <a href="#Hiper" class="nav-menu-link nav-link2">Contacto</a>
                </li>-->
                <li class="nav-menu-item">
                    <router-link class="nav-menu-link nav-link2" to="/Pedido">Realizar pedido</router-link>
                </li>
                <li class="nav-menu-item">
                    <router-link class="nav-menu-link nav-link2" to="/about">Perfil</router-link>
                </li>
            </ul>
         </nav>
  </header>     

  <!--<nav>-->
    <!--<router-link to="/">Home</router-link> |-->
   <!-- <router-link to="/about">About</router-link>-->
  <!--</nav>-->
  
  <router-view/>  

  <section class="footer" id="Hiper">
            <div class="social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>

            <ul class="list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p class="copyright">
                LaunchX @ 2022 <br>
                Realizado por Galicia Mederos Jose Pablo
            </p>
        </section>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Despues de este punto va la stylesheet */
</style>
