<template>
    <div>  
        <h1>Pruebinha</h1>
        <br>
        <p v-text="numero"></p>
        <p v-text="nombre"></p>
         <input type="text" v-model="message">
        <input :class="[tipoDato=='text' ? 'azul' : 'rojo']" :type="tipoDato"  v-model="nombre">
        <button @click="numero++">Aumentar</button>
        <button @click="numero--">Disminuir</button>
        <button @click="saludar">click!</button>
        <br>
        <label for="">Texto</label>
        <input type="radio" value="text" name="tipo" v-model="tipoDato">
        <label for="">Password</label>
        <input type="radio" value="password" name="tipo" v-model="tipoDato">
        <br>
        
        <ul>
            <li v-for="element in frutas" v-text="element"></li>
        </ul>

        <select v-model="frutaSeleccionada">
            <option v-for="element in frutas" :key="frutas" v-text="element"></option>
        </select>
         <p>Has seleccionado: {{ frutaSeleccionada }}</p>
    
        <input v-model="nuevaFruta" placeholder="Agregar fruta" />
        <button @click="agregar">Agregar</button>

        <select name="" id="">
            <option v-for="element in listPokemon" v-text="element.name" value=""></option>
        </select>

    </div>

</template>

<script>
export default{
    data(){
            return{
                message: 'Hola mundo',
                nombre: "",
                numero: 0,
                edad: 0,
                tipoDato: '',
                frutas:['mora','fresa','mango'],
                frutaSeleccionada:'',
                nuevaFruta: '',
                listPokemon: []

            }
        },
        methods:{
                    saludar(){
                         this.message= "SENA"
                        this.nombre= ""
                    },
                   
                    agregar(){
                        this.frutas.push(this.nuevaFruta);

                    },
                    listaPokemon(){
                        axios.get('https://pokeapi.co/api/v2/pokemon')
                        .then(res => {
                            console.table(res.data.results)
                            this.listPokemon =res.data.results
                        })
                        .catch(err => {
                            console.error(err); 
                        })
                    }
                },
                mounted() {
                        this.saludar()
                        this.listaPokemon()
                    },
}
</script>

<style scoped>
    .rojo{
        background-color: rgb(218, 81, 28);
    }

    .azul{
        background-color: aquamarine;
    }
</style>