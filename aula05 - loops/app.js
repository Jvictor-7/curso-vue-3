const app = {
    data () {
        return {
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
            ]
        }
    }
}

Vue.createApp(app).mount('#app')