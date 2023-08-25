<template>
    <div>
        <h1>Fotos</h1>
        <img :src="todo">
        <br>
        <br>
        <input type="text" v-model="ancho" placeholder="ingrese ancho de la foto">
        <input type="text" v-model="largo" placeholder="ingrese largo de la foto">
        <input type="text" v-model="gris" placeholder="solo grayscale">
        <input type="number" v-model="blur" placeholder="escala de blur 1-10">
        <button @click="traerFoto()">generar</button>
        {{ todo }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://picsum.photos',
                largo:'',
                ancho:'',
                gris:'',
                blur: '',
                foto: '',
                todo: '',
            }
        },
        methods: {
            traerFoto(){
                this.todo =`${this.url}/${this.ancho}/${this.largo}?${this.gris}`
               
             
            },
            setImagen(){
                this.$emit("fotoIma", this.todo)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>