import { createStore, storeKey } from 'vuex'

export default createStore({  //Guardar el contenido
  state: {                    //Almacenar variables, movimiento de informacion, etc.
    /////////////////////////////////////////////////////////Datos//////////////////////////////////////////////////////
    Precio:{
      counter:0,
      suma:0
    },
    Datos:{
      /*Valores:{
        counter:0,
        suma:0
      },*/
      Nombre:{
        valor:"",
        Vid:"escribirN"
      },
      Apellido:{
        valor:"",
        Vid:"escribirA"
      },
      Colonia:{
        valor:"",
        Vid:"escribirCol"
      },
      Calle:{
        valor:"",
        Vid:"escribirCa"
      },
      Correo:{
        valor:"",
        Vid:"escribirCorr"
      },
      Tel:{
        valor:"",
        Vid:"escribirTel"
      },
      Fecha:{
        valor:"",
        Vid:"escribirFe"
      },
      Hora:{
        valor:"",
        Vid:"escribirHo"
      }
    //Se pueden seguir ingresando variables, es un objeto.
    },
    /////////////////////////////////////////////////////////Pasteles//////////////////////////////////////////////////////
    Pasteles:{
      Pastel1:{
        Cantidad:10,
        Precio:270
      },
      Pastel2:{
        Cantidad:10,
        Precio:270
      },
      Pastel3:{
        Cantidad:10,
        Precio:270
      },
      Pastel4:{
        Cantidad:10,
        Precio:270
      },
      Pastel5:{
        Cantidad:10,
        Precio:270
      },
      Pastel6:{
        Cantidad:10,
        Precio:270
      },
    },
    /////////////////////////////////////////////////////////Adornos//////////////////////////////////////////////////////
    Adornos:{
      Infantes:{
        Cantidad:10,
        Precio:300
      },
      Bodas:{
        Cantidad:10,
        Precio:400
      },
      Personalizada:{
        Cantidad:"N/C",
        Precio:300
      }
    }
  },
  getters: {                  //Poder entrar a la informacion del estado
    cuadrado(state){
      return state.counter * state.counter;
    }
  },
  ///////////////////////////////////////////////////////////////////////Mutaciones///////////////////////////////////////////////////////////////////
  mutations: {                //Si quieremos hacer modificacion en el estado
    subirContador(state){
      state.counter++;        //Para las mutaciones se usa commit
    },
    bajarContador(state){
      state.counter--;
    },
    cambiarContador(state, random){
      state.counter += random;
    },
    randomContador(state, random){
      state.counter -= random;
    },
    ///////////////////////////////////////////////////////////////////////Aqui empieza la practica///////////////////////////////////////////////////////////////////
    Envio(state){
      document.getElementById("Pastel1id").innerHTML=state.Datos.suma;
      document.getElementById("Pastel2id").innerHTML=state.Datos.suma;
      console.log("La cantidad a pagar es:" + state.Datos.suma)
    },

    NombreCButton(state){
      for (var dato in state.Datos){
        var Vid=state.Datos[dato].Vid;
        var Vv=state.Datos[dato].valor;
        //console.log(Vid)
        console.log(Vv)
        
        document.getElementById(Vid).innerText=Vv;
      }
      //document.getElementById("escribirNo").innerText=Vv;
      //var valorVV="Jose"
      //var valorid="Pastel1id";
      //document.getElementById("Texto-Nombre").innerText=valorVV;
      
      /*var Nombre= document.getElementById("input1").value;
      var Apellidos= document.getElementById("input2").value;
      var Colonia= document.getElementById("input2").value;
      var Calle= document.getElementById("input2").value;
      var Correo= document.getElementById("input2").value;
      var Tel= document.getElementById("input2").value;
      var Fecha= document.getElementById("input2").value;
      var Hora= document.getElementById("input2").value;
      
      state.Datos.Nombre=Nombre;  //Se declara especificamente 
      console.log(state.Datos.Nombre);*/
    },

    NombreC(state, Name){
      state.Datos.Nombre.valor=Name;  //Se declara especificamente 
      console.log(state.Datos.Nombre.valor);
    },
    ApellidosC(state, Apellido){
      state.Datos.Apellido.valor=Apellido;
      console.log(state.Datos.Apellido.valor);
      //document.getElementById("escribirA").innerHTML=Apellido;
    },
    ColoniaC(state, Colonia){
      state.Datos.Colonia.valor=Colonia;              //No se declaro especificamente
      console.log(state.Datos.Colonia.valor);
      //document.getElementById("escribirCo").innerHTML=Colonia;
    },
    CalleC(state, Calle){
      state.Datos.Calle.valor=Calle;
      console.log(state.Datos.Calle.valor);
      //document.getElementById("escribirC").innerHTML=Calle;
    },
    CorreoC(state, Correo){
      state.Datos.Correo.valor=Correo;
      console.log(state.Datos.Correo.valor);
      //document.getElementById("escribirCorreo").innerHTML=Correo;
    },
    TelC(state, Tel){
      state.Datos.Tel.valor=Tel;
      console.log(state.Datos.Tel.valor);
      //document.getElementById("escribirTel").innerHTML=Tel;
    },
    FechaC(state, Fecha){
      state.Datos.Fecha.valor=Fecha;
      console.log(state.Datos.Fecha.valor);
      //document.getElementById("escribirFecha").innerHTML=Fecha;
    },
    HoraC(state, Hora){
      state.Datos.Hora.valor=Hora;
      console.log(state.Datos.Hora.valor);
      //document.getElementById("escribirHora").innerHTML=Hora;
    },
///////////////////////////////////////////////////////////////////////////////Pasteles////////////////////////////////////////////////////////////////////////////////
    Pastel1C(state){
        //sum=0;
        if (document.getElementById("Pastel1").checked){
          console.log("Checked");
          state.Precio.suma= state.Precio.suma + state.Pasteles.Pastel1.Precio;
        }else{
          console.log("Unchecked");
          state.Precio.suma= state.Precio.suma - state.Pasteles.Pastel1.Precio;
        }
        console.log(state.Precio.suma)
        document.getElementById("Pastel1id").innerHTML=state.Precio.suma;

      /*if (state.Datos.counter>0){
        state.Datos.counter=0;
      }else{
        //state.Datos.counter=state.Pasteles.Pastel1.Precio;
        state.Datos.counter = state.Datos.counter + state.Pasteles.Pastel1.Precio;
      }
      document.getElementById("Pastel1id").innerHTML=state.Datos.counter;
      console.log(state.Datos.counter);
      //document.getElementById("escribirHora").innerHTML=Hora;*/
    },
    Pastel2C(state){
      //sum=0;
      if (document.getElementById("Pastel2").checked){
        console.log("Checked");
        state.Precio.suma= state.Precio.suma + state.Pasteles.Pastel2.Precio;
      }else{
        console.log("Unchecked");
        state.Precio.suma= state.Precio.suma - state.Pasteles.Pastel2.Precio;
      }
      console.log(state.Precio.suma)
      document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  Pastel3C(state){
    //sum=0;
    if (document.getElementById("Pastel3").checked){
      console.log("Checked");
      state.Precio.suma= state.Precio.suma + state.Pasteles.Pastel3.Precio;
    }else{
      console.log("Unchecked");
      state.Precio.suma= state.Precio.suma - state.Pasteles.Pastel3.Precio;
    }
    console.log(state.Precio.suma)
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  Pastel4C(state){
    //sum=0;
    if (document.getElementById("Pastel4").checked){
      console.log("Checked");
      state.Precio.suma= state.Precio.suma + state.Pasteles.Pastel4.Precio;
    }else{
      console.log("Unchecked");
      state.Precio.suma= state.Precio.suma - state.Pasteles.Pastel4.Precio;
    }
    console.log(state.Precio.suma)
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  Pastel5C(state){
    //sum=0;
    if (document.getElementById("Pastel5").checked){
      console.log("Checked");
      state.Precio.suma= state.Precio.suma + state.Pasteles.Pastel5.Precio;
    }else{
      console.log("Unchecked");
      state.Precio.suma= state.Precio.suma - state.Pasteles.Pastel5.Precio;
    }
    console.log(state.Precio.suma)
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  Pastel6C(state){
    //sum=0;
    if (document.getElementById("Pastel6").checked){
      console.log("Checked");
      state.Precio.suma= state.Precio.suma + state.Pasteles.Pastel6.Precio;
    }else{
      console.log("Unchecked");
      state.Precio.suma= state.Precio.suma - state.Pasteles.Pastel6.Precio;
    }
    console.log(state.Precio.suma)
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  ///////////////////////////////////////////////////////////////////////////////Adornos////////////////////////////////////////////////////////////////////////////////
  AdornoIn(state){
    if (document.getElementById("Infantes").checked){
      state.Precio.suma= state.Adornos.Infantes.Precio;
      for (var Pasteles in state.Pasteles){
        //console.log(Pasteles);
        document.getElementById(Pasteles).checked = false;
      }
      //document.getElementById("Pastel1").checked = false;
      //state.Datos.suma= state.Datos.suma + state.Datos.sumaAd;
      console.log("Checked");
    }
    console.log(state.Precio.suma);
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  AdornoBo(state){
    if (document.getElementById("Bodas").checked){
      state.Precio.suma= state.Adornos.Bodas.Precio;
      for (var Pasteles in state.Pasteles){
        //console.log(Pasteles);
        document.getElementById(Pasteles).checked = false;
      }
      //state.Datos.suma= state.Datos.suma + state.Datos.sumaAd;
      console.log("Checked");
    }
    console.log(state.Precio.suma);
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  AdornoPe(state){
    if (document.getElementById("Personalizados").checked){
      state.Precio.suma= state.Adornos.Personalizada.Precio;
      for (var Pasteles in state.Pasteles){
        //console.log(Pasteles);
        document.getElementById(Pasteles).checked = false;
      }
      //state.Datos.suma= state.Datos.suma + state.Datos.sumaAd;
      console.log("Checked");
    }
    console.log(state.Precio.suma);
    document.getElementById("Pastel1id").innerHTML=state.Precio.suma;
  },
  },
  ///////////////////////////////////////////////////////////////////////Actions///////////////////////////////////////////////////////////////////
  actions: {                  //Las acciones son parecidas a las mutaciones, solo que en estas se puede tener codigo asincrono, sirven para accionar las mutaciones
    async cambiarContador({commit}){
      const res=await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const result=await res.json();
      console.log(result);
      commit("cambiarContador",result)
    },
    async randomContador({commit}){
      const res=await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const result=await res.json();
      console.log(result);
      commit("randomContador",result)
    },
    ///////////////////////////////////////////////////////////////////////Aqui empieza la practica///////////////////////////////////////////////////////////////////
    NombreC({commit},Nombre){
      const Name=document.getElementById("input1").value;
      commit("NombreC",Name);
    },
    ApellidosC({commit}){
      const Apellido=document.getElementById("input2").value;
      commit("ApellidosC",Apellido);
    },
    CalleC({commit}){
      const Calle=document.getElementById("input4").value;
      commit("CalleC",Calle);
    },
    ColoniaC({commit}){
      const Colonia=document.getElementById("input3").value;
      commit("ColoniaC",Colonia);
    },
    CorreoC({commit}){
      const Correo=document.getElementById("correo1").value;
      commit("CorreoC",Correo);
    },
    TelC({commit}){
      const Tel=document.getElementById("numero1").value;
      commit("TelC",Tel);
    },
    FechaC({commit}){
      const Fecha=document.getElementById("fecha1").value;
      commit("FechaC",Fecha);
    },
    HoraC({commit}){
      const Hora=document.getElementById("hora").value;
      commit("HoraC",Hora);
    },
///////////////////////////////////////////////////////////////////////Pasteles///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////No se envian valores///////////////////////////////////////////////////////////////////////////
    Pastel1C({commit}){
      const Precio=document.getElementById("Pastel1").value;
      commit("Pastel1C",Precio);
    },
    Pastel2C({commit}){
      const Precio=document.getElementById("Pastel2").value;
      commit("Pastel2C",Precio);
    },
    Pastel3C({commit}){
      const Precio=document.getElementById("Pastel3").value;
      commit("Pastel3C",Precio);
    },
    Pastel4C({commit}){
      const Precio=document.getElementById("Pastel4").value;
      commit("Pastel4C",Precio);
    },
    Pastel5C({commit}){
      const Precio=document.getElementById("Pastel5").value;
      commit("Pastel5C",Precio);
    },
    Pastel6C({commit}){
      const Precio=document.getElementById("Pastel6").value;
      commit("Pastel6C",Precio);
    },
    AdornoPe({commit}){
      const Precio=document.getElementById("Personalizados").value;
      commit("AdornoPe",Precio);
    },

    CButton({commit}){
      for (var dato in this.state.Datos){
        console.log(dato)
      }
    },
    
  },
  modules: {                  //Limita las acciones para el modulo definido
  }
})
