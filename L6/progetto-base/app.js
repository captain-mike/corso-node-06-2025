Vue.createApp({
    data(){
        //Questo return restituisce un oggetto contenente tutte le variabili che si possono utilizzare nell'HTML
        return {
            count: 0,
            inputText : '',
            todos: []
        }
    },
    //Methods contiene un oggetto pieno di metodi che si tradurranno in funzioni adoperabili nell'HTML 
    methods:{
        aumenta(){
            this.count++;
        },
        riduci(){
            this.count--;
        },
        addTodo(){
            this.todos.push(this.inputText)
            this.inputText = '';
        }
    }
}).mount('#app')