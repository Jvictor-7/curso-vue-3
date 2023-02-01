const app = {
    data () {
        return {
            name: 'João',
            lastName: 'Lima',
        }
    }
}

Vue.createApp(app).mount('#app')