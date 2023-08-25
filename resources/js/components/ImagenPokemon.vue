<template>
    <div>
        <h1>Imagen</h1>
        <img :src="imagen" style="width: 20%;">
        <p>{{ saludar }}</p>
        <p>{{ saludar }}</p>
        <p>{{ saludar}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            imagen: ''
        },
        data() {
            return {
                numero: 5
            }
        },
        methods: {
        },
        computed:{
            
            saludar(){
                console.log("hola");
    
                return this.numero*3
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>