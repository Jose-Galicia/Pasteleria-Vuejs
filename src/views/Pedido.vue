<template>
    <div class="Pedido">
         <Pedido/>
    </div>   
</template>


<script>
import Counter from "../components/Counter.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Botones from "../components/Botones.vue";

import Pasteles from "../components/Pasteles.vue"
import Adornos from "../components/Adornos.vue"
import Contenedores from "../components/Contenedores.vue"
import Pedido from "../components/Pedido.vue"
import Pedidos from "../components/Pedidos.vue"

export default {
  name: 'HomeView',
  components:{
    Counter,
    Cuadrado, 
    Botones,
    Pasteles,
    Adornos,
    Contenedores,
    Pedido,
    Pedidos,
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