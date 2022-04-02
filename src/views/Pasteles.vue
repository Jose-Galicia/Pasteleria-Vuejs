<template>
    <div class="separador-pasteles">
      <h3 class="tradicion">Ingredientes naturales de la mas alta calidad</h3>
      <p class="tradicion-2">Pasteles</p>
      <div class="cake-icon">-----<i class="fa-solid fa-cake-candles"></i>-----</div>
    </div>
    <div class="Pasteles">
      <Pasteles/>
    </div>
</template>

<style scoped>

.tradicion{
  padding: 60px 0 0px;
  font-size: 30px;
  color: goldenrod;
}

.tradicion-2{
  margin-top: 10px;
  font-size: 50px;
}

.separador-pasteles{
  margin-top: 0px;
}

.cake-icon{
  margin-top: 10px;
  color: goldenrod;
  font-size: 30px;
}
</style>

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