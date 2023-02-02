const app = {
    data () {
        return {
            title: 'Curso de Vue 3',
            name: 'João',
            lastName: 'Lima',
            products: [
                {
                    title: 'Anime 01',
                    description: 'Anime muito legal',
                    image: './assets/images/anime01.jpg',
                    stars: 3,
                },
                {
                    title: 'Anime 02',
                    description: 'Anime muito legal (2)',
                    image: './assets/images/anime02.jpg',
                    stars: 0,
                }
            ],
            cart: [],
        }
    },

    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    },

    methods: {
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart (product) {
            const cart = this.cart.filter((prod, index) => product != prod)

            this.cart = cart
        }
    }
}

Vue.createApp(app).mount('#app')