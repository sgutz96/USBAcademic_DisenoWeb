const app = Vue.createApp({
            data() {
                return {
                    counter: 0
                };
            },
           methods: {
                increaseCounter() {
                    this.counter++;
                },
                decreaseCounter() {
                    this.counter--;
                }
            }
        });
        app.mount('#app');