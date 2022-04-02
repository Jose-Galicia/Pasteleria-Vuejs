<template>
    <div class="separador">
            <section class="contenedor">
            <ul class="productos">
                <li class="pastel-adornos">
                    <img class="imagen-pastel" src="https://i.pinimg.com/originals/0a/fe/80/0afe807433ade828d063208b59abdf3e.png" alt="Paste 1"> "Pastel 1"
                    <ul>
                        <li class="precio">$ 270</li>
                    </ul>
                </li>
                <li class="pastel-adornos">
                    <img class="imagen-pastel" src="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbminibaileys-0678927653785296.png" alt="Pastel 2"> "Pastel 2"
                    <ul>
                        <li class="precio">$ 270</li>
                    </ul>
                </li>
                <li class="pastel-adornos">
                    <img class="imagen-pastel" src="https://img2.freepng.es/20181106/qvy/kisspng-bakery-cakery-chocolate-cake-cake-decorating-chocolate-cake-home-made-5be197038dff67.1257834015415109155816.jpg" alt="Pastel 3"> "Pastel 3"
                    <ul>
                        <li class="precio">$ 270</li>
                    </ul>
                </li>
                <li class="pastel-adornos">
                    <img class="imagen-pastel" src="https://w7.pngwing.com/pngs/338/519/png-transparent-birthday-cake-linyi-tiramisu-fruitcake-cream-cake-cream-food-cake-decorating.png" alt="Pastel 4"> "Pastel 4"
                    <ul>
                        <li class="precio">$ 270</li>
                    </ul>
                </li>
                <li class="pastel-adornos">
                    <img class="imagen-pastel" src="https://www.pngitem.com/pimgs/m/300-3008611_precios-pasteles-tere-cazola-hd-png-download.png" alt="Pastel 5"> "Pastel 5"
                    <ul>
                        <li class="precio">$ 270</li>
                    </ul>
                </li>
                <li class="pastel-adornos">
                    <img class="imagen-pastel" src="https://freepikpsd.com/file/2019/10/imagenes-de-pasteles-png-4-Transparent-Images.png" alt="Pastel 6"> "Pastel 6"
                    <ul>
                        <li class="precio">$ 270</li>
                    </ul>
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
        name: 'Pasteles',
    }
</script>