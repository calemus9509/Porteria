<template>
    <div>
        <h1>Pokemon</h1>
        <Lista @imagen="getImagen"></Lista>
        <Image :imagen ="urlImagenP"></Image>
        <Api @fotoIma ="getfot"></Api>


    </div>
</template>

<script>
import Lista from '@/components/LisPokemon.vue'
import Image from '@/components/ImagenPokemon.vue'
import Api from '@/components/ApiPhotos.vue'
    export default {
        components:{
            Lista,
            Image,
            Api
        },
        data() {
            return {
                urlImagenP: '',
                fotoF: '',
            }
        },
        methods: {
            getImagen(data){
                this.urlImagenP = data
            },

            getfot(){
                this.fotoF
            }

        },
     
    }
</script>

<style lang="scss" scoped>

</style>