const myApp = {
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
            // textColor: '#000',
            // bgColor: '$fff',
            styles: {
                backgroundColor: '#000',
                color: '#fff',
            },
            themeBlack: true
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
        },

        toogleTheme () {
            this.themeBlack = !this.themeBlack

            if (this.themeBlack) {
                //Um jeito de mudar os valores de styles
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            }
            else {
                //Outro jeito de mudar os valores de styles
                this.styles = {
                    backgroundColor: '#fff',
                    color: '#000',
                }
            }
        }
    }
}

const app = Vue.createApp(myApp)
