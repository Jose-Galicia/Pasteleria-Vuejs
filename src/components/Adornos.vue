<template>
    <div class="separador">
            <section class="contenedor">
                <ul class="productos">
                    <li class="pastel-adornos">
                        <img class="imagen-pastel" src="https://w7.pngwing.com/pngs/350/502/png-transparent-birthday-cake-torte-cake-decorating-birthday-cake-child-cake-decorating-fondant.png" alt=""> "Decoracion para infantes"
                        <ul class="precio">$ 300</ul>
                    </li>
                    <li class="pastel-adornos">
                        <img class="imagen-pastel" src="https://img2.freepng.es/20180602/asc/kisspng-wedding-cake-torte-marriage-cake-decorating-piece-cake-5b126397e66e78.1741897515279317999439.jpg" alt=""> "Decoracion para bodas"
                        <ul class="precio">$ 300</ul>
                    </li>
                    <li class="pastel-adornos">
                        <img class="imagen-pastel" src="https://aranzazu.com/wp-content/uploads/2020/06/despedidas1.png" alt=""> "Decoracion personalizada"
                        <ul class="precio">$ 300</ul>
                    </li>
                   
                </ul>
            </section>

        </div>
</template>

<style scoped>
    .separador {
    padding-top: 0px;
    }

    .contenedor {
    display: block;
    max-width: 1260px;
    margin: auto;
    }

    .productos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 25px 25px 0;
    padding: 25px 25px 0;
    }

    .precio {
    color: var(--precio);
    }

    .pastel-adornos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 10px;
    width: 300px;
    height: 250px;
    background-color: white;
    box-shadow: inset 0 0 20px 0 pink;
    border-radius: 10px;
    transition: transfom .1s;
    }

    .pastel-adornos:hover{
        margin-top: -5px;
        transition: 0.5s;
    }

    .imagen-pastel{
        height: 100px;
    }
</style>

<script>
    export default{
        name: 'Adornos',
    }
</script>