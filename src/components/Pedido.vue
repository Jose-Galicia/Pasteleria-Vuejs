<template>
    <div class="Pedido">
        <div class="parent">
        <section> 
        <form action="">
            <h2 class="Titulo-Seleccion">Pastel y Adornos</h2>
            <section class="Seleccion-PyA">
            <div class="Seleccion-Pastel">
                <section class="elementos">
                    <h2>Pasteles</h2><br>
                    <input type="checkbox" id="Pastel1" name="Pastel1" v-model="Pastel1C" value="Pastel1">
                    <label for="Pastel1">Pastel 1</label><br>

                    <input type="checkbox" id="Pastel2" name="Pastel2" v-model="Pastel2C" value="Pastel2">
                    <label for="Pastel2">Pastel 2</label><br>

                    <input type="checkbox" id="Pastel3" name="Pastel3" v-model="Pastel3C" value="Pastel3">
                    <label for="Pastel3">Pastel 3</label><br>

                    <input type="checkbox" id="Pastel4" name="Pastel4" v-model="Pastel4C" value="Pastel4">
                    <label for="Pastel4">Pastel 4</label><br>

                    <input type="checkbox" id="Pastel5" name="Pastel5" v-model="Pastel5C" value="Pastel5">
                    <label for="Pastel5">Pastel 5</label><br>
                    
                    <input type="checkbox" id="Pastel6" name="Pastel6" v-model="Pastel6C" value="Pastel6">
                    <label for="Pastel6">Pastel 6</label><br>
                </section>
            </div>

            <div class="Seleccion-Adornos">
                <h2>Adornados</h2><br>
                <input type="radio" id="Infantes" name="Adornos" value="Infantes" v-on:click="$store.commit('AdornoIn')"> Infantes <br>
                
                <input type="radio" id="Bodas" name="Adornos" value="Bodas" v-on:click="$store.commit('AdornoBo')"> Bodas <br>
               
                <input type="radio" id="Personalizados" name="Adornos" value="Personalizados" v-on:click="$store.commit('AdornoPe')"> Personalizados
                <!--<label for="guacamole">Guacamole</label><br><br>-->
            </div>
            </section>  <!--Pasteles y adornos-->

            <section class="contenedor">
                <div>
                    <h2 class="titulos2">Ingresa tus datos</h2>
                    <br>
                    <h3 class="titulos3">Ingresa tus datos</h3>
                    <!--Texto -->
                    <label for='input1'> Nombres </label><br>
                    <input type='text' id='input1' name='input1' v-model="NombreC" placeholder="Nombre"><br> 

                    <label for='input2'> Apellidos </label><br>
                    <input type='text' id='input2' name='input2' v-model="ApellidosC" placeholder="Apellidos"><br> 

                    <label for='input3'> Colonia </label><br>
                    <input type='text' id='input3' name='input3' v-model="ColoniaC" placeholder="Colonia"><br> 

                    <label for='input4'> Calle y No. </label><br>
                    <input type='text' id='input4' name='input4' v-model="CalleC" placeholder="Calle"><br>

                    <label for='input1'> Correo </label><br>
                    <input type='email' id='correo1' name='correo1' v-model="CorreoC" placeholder="example@dominio"><br> 
        
                    <label for='numero1'> Numero de telefono </label><br>
                    <input type='number' id='numero1' name='numero1' v-model="TelC"><br><br>
                </div>

            <div class="fecha">
                <!--Fecha -->
                <h3 class="titulos3">Fecha de entrega</h3>
                <label for='fecha1'> Semana </label><br>
                <input type="date" id="fecha1" name="fecha1" v-model="FechaC"><br>

                <label for='fecha1'> Hora </label><br>
                <input type='time' id='hora' name='hora' v-model="HoraC"><br><br>

                <!--Seleccion 
                <h3 class="titulos3">Recoger/Domicilio</h3>
                <input type="radio" id="aqui" name="aquiollevar" value="Recoger" v-model="SeleccionC">
                <label for="Aqui"> Aqui </label><br>
                <input type="radio" id="llevar" name="aquiollevar" value="Domicilio" v-model="SeleccionC">
                <label for="llevar"> Llevar </label><br>-->

                <!--Botones -->
                <h3 class="titulos3">Paso final</h3>
                <input  class="button" type="reset"><br>
                <!--<input type="submit" value="Submit" onclick="recibir()"> <br>-->
                <input  class="button" type="reset" value="Refrescar" onclick="javascript:window.location.reload();"/> <br>
                <!--<input type="button" value="Enviar" v-on:click="recibir()">-->
                
            </div>
            </section>
        </form> 
        <button class="button" v-on:click="$store.commit('NombreCButton')">
            Enviar
        </button>

        </section>   

        <section>

            <h2 class="TituloP">Pedido</h2>
            <section class="datos">

            <div class="dato1">
            <p>Nombres</p>    
            <input type="text" v-model="NombreC" id="escribirN">
            <!--<div id="escribirN">__________</div>-->
            <!--<div id="escribirN"></div> <br>-->

            <p>Apellidos</p>
            <input type="text" v-model="ApellidosC" id="escribirA">
            <!--<div id="escribirA">__________</div>-->
            
            </div>

            <div class="dato1">
            <p>Colonia</p>
            <input type="text" v-model="ColoniaC" id="escribirCol">
            <!--<div id="escribirCol">__________</div>-->
            

            <p>Calle</p>
            <input type="text" v-model="CalleC" id="escribirCa">
            <!--<div id="escribirCa">__________</div>-->
            
            </div>

            <div class="dato1">
            <p>Correo</p>
            <input type="text" v-model="CorreoC" id="escribirCorr">
            <!--<div id="escribirCorr">__________</div>-->
            

            <p>Telefono</p>
            <input type="text" v-model="TelC" id="escribirTel">
            <!--<div id="escribirTel">__________</div>-->
            
            </div>

            <div class="dato1">
            <p>Fecha</p>
            <input type="text" v-model="FechaC" id="escribirFe">
            <!--<div id="escribirFe">__________</div>-->
            

            <p>Hora</p>
            <input type="text" v-model="HoraC" id="escribirHo">
            <!--<div id="escribirHo">__________</div>-->

            <label for="Pastel1id">Precio total:</label>
            <div id="Pastel1id"></div>
            
            </div>
            </section>
        </section>
        </div>  <!--Parent-->
    </div>
    <div class="altura"></div>
</template>

<style scoped>
*{
    text-align: left;
}

.contenedor{
    padding: 50px 100px;
    line-height: 30px;display: flex;
}

.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.fecha{
    margin: 60px 0px;
}

.datos{
    padding: 50px 100px;
    display: flex;
    position: relative;
}

.TituloP{
    text-align: center;
    padding-top: 50px;
    font-size: 40px;
}

.dato1{
    font-size: 20px;
    margin: 0 10px;
    line-height: 30px;
}
.button{
    height: 30px;
    width: 80px;
    margin-top: 10px;
}

.altura{
    margin-top: 75px;
}

.Seleccion-Pastel .elementos {
    margin-top: 20px;
    margin-left: 100px;
    line-height: 30px;
    font-size: 20px;
}

.Titulo-Seleccion{
    margin-top: 20px;
    margin-left: 100px;
    text-align: left;
    font-size: 40px;
}

.Seleccion-PyA{
    display: flex;
}

.Seleccion-Adornos {
    margin-top: 20px;
    margin-left: 100px;
    line-height: 30px;
    font-size: 20px;
}
</style>

<script>
    export default{
        name: 'Pedido',
        computed:{
            NombreC:{
                get(){
                    return this.$store.state.Datos.Nombre.valor;
                },
                set(valor){
                    this.$store.dispatch("NombreC",valor);
                }
            },
            ApellidosC:{
                get(){
                    return this.$store.state.Datos.Apellido.valor;
                },
                set(valor){
                    this.$store.dispatch("ApellidosC",valor);
                }
            },
            ColoniaC:{
                get(){
                    return this.$store.state.Datos.Colonia.valor;
                },
                set(valor){
                    this.$store.dispatch("ColoniaC",valor);
                }
            },
            CalleC:{
                get(){
                    return this.$store.state.Datos.Calle.valor;
                },
                set(valor){
                    this.$store.dispatch("CalleC",valor);
                }
            },
            CorreoC:{
                get(){
                    return this.$store.state.Datos.Correo.valor;
                },
                set(valor){
                    this.$store.dispatch("CorreoC",valor);
                }
            },
            TelC:{
                get(){
                    return this.$store.state.Datos.Tel.valor;
                },
                set(valor){
                    this.$store.dispatch("TelC",valor);
                }
            },
            FechaC:{
                get(){
                    return this.$store.state.Datos.Fecha.valor;
                },
                set(valor){
                    this.$store.dispatch("FechaC",valor);
                }
            },
            HoraC:{
                get(){
                    return this.$store.state.Datos.Hora.valor;
                },
                set(valor){
                    this.$store.dispatch("HoraC",valor);
                }
            },
            Pastel1C:{
                get(){
                    return this.$store.state.Pasteles.Pastel1.Precio;
                },
                set(Precio){
                    this.$store.dispatch("Pastel1C",Precio);
                }
            },
            Pastel2C:{
                get(){
                    return this.$store.state.Pasteles.Pastel2.Precio;
                },
                set(Precio){
                    this.$store.dispatch("Pastel2C",Precio);
                }
            },
            Pastel3C:{
                get(){
                    return this.$store.state.Pasteles.Pastel3.Precio;
                },
                set(Precio){
                    this.$store.dispatch("Pastel3C",Precio);
                }
            },
            Pastel4C:{
                get(){
                    return this.$store.state.Pasteles.Pastel4.Precio;
                },
                set(Precio){
                    this.$store.dispatch("Pastel4C",Precio);
                }
            },
            Pastel5C:{
                get(){
                    return this.$store.state.Pasteles.Pastel5.Precio;
                },
                set(Precio){
                    this.$store.dispatch("Pastel5C",Precio);
                }
            },
            Pastel6C:{
                get(){
                    return this.$store.state.Pasteles.Pastel6.Precio;
                },
                set(Precio){
                    this.$store.dispatch("Pastel6C",Precio);
                }
            },
            AdornoPe:{
                get(){
                    return this.$store.state.Adornos.Personalizada.Precio;
                },
                set(Precio){
                    this.$store.dispatch("AdornoPe",Precio);
                }
            },
        }
    }

    /*function recibir(){
        var Nombre=document.getElementById("input1").value;
        document.getElementById("escribir").innerHTML=Nombre;
    }*/
</script>