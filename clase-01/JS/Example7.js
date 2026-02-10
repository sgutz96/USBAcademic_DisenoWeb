 const app = Vue.createApp({
            data() {
                return {
                    tareas: ['Tomate', 'Carne', 'pimienta'],
                    nuevaTarea: ''
                };
            },
            methods: {
                // Puedes agregar métodos aquí si es necesario
                agregarTarea() {
                    if (this.nuevaTarea.trim() !== '') {
                        this.tareas.push(this.nuevaTarea);
                        this.nuevaTarea = ''; // Limpiar el campo de entrada
                    }
                },
                eliminarTarea(index) {
                    this.tareas.splice(index, 1); // Eliminar la tarea en el índice especificado
                }
               
                
            }
        });

        app.mount('#app');