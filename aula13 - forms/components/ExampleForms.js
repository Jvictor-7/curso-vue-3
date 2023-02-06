const exampleForm = {
    template: `
        <form action="#" method="post" @submit.prevent="saveData">
            <label for="">
                Nome:
                <input v-model="name" type="text" name="name" placeholder="Nome">

                <div v-if="errors.name">{{ errors.name }}</div>
            </label>
            <label for="">
                Sexo:
                <select v-model="sexo" name="sexo">
                    <option value="">Escolha</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
            <label for="">
                Descrição:
                <textarea v-model="description" name="description" placeholder="Descrição"></textarea>
            </label>
            <label for="">
                <input v-model="agree" type="checkbox" name="agree">
                Concordo
            </label>
            <button type="submit">Enviar</button>
        </form>
    `,

    data() {
        return {
            name: 'Carlos Ferreira',
            sexo: '',
            description: '',
            agree: true,

            errors: {
                name: ''
            }
        }
    },

    methods: {
        saveData (){
            this.reset()
            
            if (this.name === '') {
                this.errors.name = 'Informe um valor para o nome'

                return
            }
            console.log(this.name)
            console.log(this.sexo)
            console.log(this.description)
            console.log(this.agree)
        },

        reset () {
            this.errors = {
                name: ''
            }
        }
    }

}

app.component('example-form', exampleForm)