<template>
    <div>
        <h1>Pokemon</h1>
    </div>
</template>

<script>
import Lista from '@/components/LisPokemon.vue'
import Lista from '@/components/ImagenPokemon.vue'
    export default {
        components:{
            Lista,
            Imagen
        },
        data() {
            return {
                listaPokemon: []
            }
        },
        methods: {
            // pokemons(){
            //     axios.get('https://pokeapi.co/api/v2/pokemon')
            //             .then(res => {
            //                 console.table(res.data.results)
            //                 this.listPokemon =res.data.results
            //             })
            //             .catch(err => {
            //                 console.error(err); 
            //             })
            // }
        },
        mounted() {
            // this.pokemons()
        },
    }
</script>

<style lang="scss" scoped>

</style>