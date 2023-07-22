<template>
    <div>  
        <h1>Pruebinha</h1>
        <br>
        <p v-text="numero"></p>
        <button @click="numero++">Aumentar</button>
        <button @click="numero--">Disminuir</button>
    </div>

</template>

<script>
export default{
    data(){
            return{
                message: 'Hola mundo',
                nombre: "",
                numero: 0

            }
        },
        methods:{
                    saludar(){
                        this.message= "SENA"
                    }
                }
}
</script>