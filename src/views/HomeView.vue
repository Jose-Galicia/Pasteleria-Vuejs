<template>
  <header></header>
  <div class="home">
    <div class="fondoImagen">
      <img alt="Vue logo" src="../assets/Myproject2.png" class="logo">
      <h2 class="texto-fondoI">Tradicion en reposteria</h2>
    </div>

    <div>
      <h3 class="tradicion">Tradicion familiar</h3>
      <p class="tradicion-2">Pasteleria Buenavista</p>
      <div class="cake-icon">-----<i class="fa-solid fa-cake-candles"></i>-----</div>
      <p class="tradicion-text">Somos una empresa 100% mexicana  dedicada a la pastelería y repostería desde hace más de 40 años, <br>
        empezamos siendo una familia de 12 personas y hemos crecido con el paso de los años.
      </p>
    </div>
    
    <div class="separador-pasteles">
      <h3 class="tradicion">Ingredientes naturales de la mas alta calidad</h3>
      <p class="tradicion-2">Pasteles</p>
      <div class="cake-icon">-----<i class="fa-solid fa-cake-candles"></i>-----</div>
    </div>

    <div>
      <Pasteles/>
    </div>

    <div class="Imagen-Mov">
      <p class="Imagen-Mov-Text">Hacemos envíos de pasteles a domicilio el mismo día de tu pedido, <br> a toda la Ciudad de Guadalajara.</p>
    </div>

    <div class="separador-pasteles">
      <h3 class="tradicion">Los adornos que haran de tu pastel uno especial</h3>
      <p class="tradicion-2">Adornos</p>
      <div class="cake-icon">-----<i class="fa-solid fa-cake-candles"></i>-----</div>
    </div>

    <div>
      <Adornos/>
    </div>

    <div class="separador-pasteles">
      <h3 class="tradicion">Para tus eventos especiales</h3>
      <p class="tradicion-2">Personalizalos a tu gusto!</p>
      <div class="cake-icon">-----<i class="fa-solid fa-cake-candles"></i>-----</div>
    </div>

    <div>
      <Contenedores/>
    </div>


   
    
    <!--<Counter/>
    <Cuadrado/>
    <Botones/>-->
  </div>
  
</template>

<script>
import Counter from "../components/Counter.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Botones from "../components/Botones.vue";

import Pasteles from "../components/Pasteles.vue"
import Adornos from "../components/Adornos.vue"
import Contenedores from "../components/Contenedores.vue"

export default {
  name: 'HomeView',
  components:{
    Counter,
    Cuadrado, 
    Botones,
    Pasteles,
    Adornos,
    Contenedores,
  }
  /*data(){
    return {counter:0 //Va con dos puntos porque lo que regresa es ub objeto
    }
  },*/
  /*methods:{
    bajarContador(){
      this.counter--;
    },
    subirContador(){
      this.counter++;
    }
  }*/
}
</script>

<style scoped>

  div{
    margin-bottom: 10px;
  }
  .counter{
  font-size:80px;
  }

  .logo{
    height: 300px;
    margin-top: 100px;
  }

  .buttons button{  /*Se pone de esta manera cuando quieres que afecte a los elementos que estan dentro de otro, sus hijos, porque justamente al div ya se le asigno algo */
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }

  .cuadrado{
    font-size: 25px;
  }

  .fondoImagen{
    background-image: url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2017%2F02%2F24%2F3a23ae4b-48b7-44eb-96a7-0e8e755683b6-2000.jpg&q=60);
    height: 900px;
    background-position: top;
    position: relative;
}

.fondo-galletas{
  padding: 0 500px;
  height: 300px;
  position: absolute;
  align-items: right;
}

.fondo-macarons{
  margin: 10px 1300px;
  height: 150px;
  position: relative;
  align-items: left;
}

.texto-fondoI{
  margin-top: 40px;
  font-size: 90px;
  font-weight: bolder;
  text-decoration: none;
  color: skyblue;
}

.tradicion{
  padding: 60px 0 0px;
  font-size: 30px;
  color: goldenrod;
}

.tradicion-2{
  margin-top: 10px;
  font-size: 50px;
}

.cake-icon{
  margin-top: 10px;
  color: goldenrod;
  font-size: 30px;
}

.tradicion-text{
  font-size: 20px;
  margin-top: 10px;
}

.separador-pasteles{
  margin-top: 50px;
}

.Imagen-Mov{
  background-image: url(https://www.recetasderechupete.com/wp-content/uploads/2020/02/Pastel-de-canela-1.png);
  background-attachment: fixed;
  background-size: cover;
  height: 400px;
  max-width: 100%;
}

.Imagen-Mov-Text{
  color: black;
  font-size: 30px;
  font-weight: 100;
  text-align: center;
  padding: 200px;
}
</style>
