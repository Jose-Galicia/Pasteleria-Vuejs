<template>
    <div class="contenedor">
        <figure>
            <img src="https://officemax.vteximg.com.br/arquivos/ids/208594-1150-1150/110996_1.jpg?v=637559113414130000" alt="XV">
            <div class="capa">
                <h3>XV Años</h3>
                <p>Los mejores disenos para tus 15 anos</p>
            </div>
        </figure>
        <figure>
            <img src="https://www.zankyou.com.mx/images/mag-card-c/ad8/8ade/878/623/-/mx/wp-content/uploads/2018/05/antonio-saucedo.jpg" alt="XV">
            <div class="capa">
                <h3>Bodas</h3>
                <p>Los mejores disenos para tu boda perfecta</p>
            </div>
        </figure>
        <figure>
            <img src="https://blog.xochitla.org.mx/wp-content/uploads/2017/06/graduacion.jpg" alt="XV">
            <div class="capa">
                <h3>Graduaciones</h3>
                <p>Los mejores disenos para tu celebracion de graduacion</p>
            </div>
        </figure>
        <figure>
            <img src="https://ep01.epimg.net/verne/imagenes/2019/01/19/articulo/1547919673_116880_1548081888_noticia_normal.jpg" alt="XV">
            <div class="capa">
                <h3>Cumpleanos</h3>
                <p>Los mejores disenos para tus cumpleanos</p>
            </div>
        </figure>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    .contenedor{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
    }
    
    .contenedor figure{
        position: relative;
        height: 250px;
        width: 350px;
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 0px 0px 5px;
        margin: 0 10px;
    }

    .contenedor figure img{
        width: 100%;
        height: 100%;
        transition: all 500ms ease-out;
    }

    .contenedor figure .capa{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: goldenrod;
        opacity: 0;
        transition: all 500ms ease-out;
        visibility: hidden;
        text-align: center;
    }

    .contenedor figure:hover > .capa{
        opacity: 1;
        visibility: visible;
        
    }

    .contenedor figure:hover > .capa h3{
        margin-top: 70px;
        margin-bottom: 15px;
    }

    .contenedor figure:hover > img{
        transform: scale(1.1);
    }

    .contenedor figure .capa h3{
        color: #fff;
        font-weight: 400;
        margin-bottom: 120px;
        transition: all 500ms ease-out;
        margin-top: 30px;
    }

    .contenedor figure .capa p{
        color: #fff;
        font-size: 15px;
        line-height: 1.5;
        width: 100%;
        max-width: 220px;
        margin: auto;
    }

</style>

<script>
    export default{
        name: 'Contenedores',
    }
</script>