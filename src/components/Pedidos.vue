<template>
    <div class="Pedidos">
        <div class="Contenedor">

            <h2 class="TituloP">Pedido</h2>

            <section>
            
                <div class="dato1">
                <p>Nombre completo: </p>    <br>
                <!--<input type="text" v-model="NombreC" id="escribirN">-->
                <p id="escribirN">{{$store.state.Datos.Nombre.valor}} {{$store.state.Datos.Apellido.valor}}</p>
                <!--<div id="escribirN">{{$store.state.Datos.Nombre.valor}}</div> <br>-->

                <!--<p>Apellidos</p>-->
                <!--<input type="text" v-model="ApellidosC" id="escribirA">-->
                <!--<div id="escribirA">__________</div>-->
                <!--<div id="escribirN">{{$store.state.Datos.Apellido.valor}}</div>-->
            
                </div>

                <div class="dato1">
                <p>Direccion: </p> <br>
                <!--<input type="text" id="escribirCol">-->
                <!--<div id="escribirCol">__________</div>-->
                <div id="escribirA">{{$store.state.Datos.Colonia.valor}} {{$store.state.Datos.Calle.valor}}</div>
            

                <!--<p>Calle</p>-->
                <!--<input type="text" id="escribirCa">-->
                <!--<div id="escribirCa">__________</div>-->
                <!--<div id="escribirN">{{$store.state.Datos.Calle.valor}}</div>-->
            
                </div>

                <div class="dato1">
                <!--<p>Correo</p>-->
                <!--<input type="text" id="escribirCorr">-->
                <!--<div id="escribirCorr">__________</div>-->
                <!--<div id="escribirN">{{$store.state.Datos.Correo.valor}}</div>-->
            

                <p>Telefono: </p>  <br>
                <!--<input type="text" id="escribirTel">-->
                <!--<div id="escribirTel">__________</div>-->
                <div id="escribirTel">{{$store.state.Datos.Tel.valor}}</div>
            
                </div>

                <div class="dato1">
                <p>Fecha y Hora: </p> <br>
                <!--<input type="text" id="escribirFe">-->
                <!--<div id="escribirFe">__________</div>-->
                <div id="escribirFe">{{$store.state.Datos.Fecha.valor}}</div>
            

                <!--<p>Hora</p>-->
                <!--<input type="text" id="escribirHo">-->
                <!--<div id="escribirHo">__________</div>-->
                <div id="escribirHo">{{$store.state.Datos.Hora.valor}}</div>
                </div>

                <div class="dato1">
                <p>Pasteles y Adornos </p> <br>
                <!--<input type="text" id="escribirFe">-->
                <!--<div id="escribirFe">__________</div>-->
                <div id="escribir">{{$store.state.Datos.Fecha.valor}}</div>
            

                <!--<p>Hora</p>-->
                <!--<input type="text" id="escribirHo">-->
                <!--<div id="escribirHo">__________</div>-->
                <div id="escribirN">{{$store.state.Datos.Hora.valor}}</div>
                </div>

                <label for="Pastel1id">Precio total:</label>
                <!--<div id="Pastel1id"></div>-->
                <div id="PrecioT">{{$store.state.Precio.suma}}</div>

                
            
            </section>
        </div>
        
    </div>
</template>

<style scoped>
*{
    margin: 0;
    box-sizing: border-box;
    zoom: -90%;
}

.parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.Contenedor{
    /*text-align: left;*/
    line-height: 30px;
    border-style: solid;
    height: 500px;
    width: 400px;
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 110px;
    background-color: cornsilk;
}

.datos{
    text-align: center;
    align-items: center;
    align-content: center;
}

.dato1{
    margin-top: 20px;
    display: flex;
    /*padding-right: 50px;*/
    line-height: 30px;

    border-bottom:solid 1px skyblue;
    width:100%;
    height:40px;
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