      const app = Vue.createApp({
            data() {
                return {
                    mostrar : false,
                };
            },
           methods: {
            mostrarMensaje(){
                this.mostrar = !this.mostrar
            }
            }
        });

        app.mount('#app');