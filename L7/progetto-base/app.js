Vue.createApp({
    data(){
        return {
            linkDinamico : 'https://google.it',
            isButtonDisabled : true,
            testo: ''
        }
    },
    methods:{
        toggleButton(){
            this.isButtonDisabled = !this.isButtonDisabled
        },
        inviaForm(e, saluto){
            console.log(e);            
            e.preventDefault();
            console.log(`${saluto}, ${this.testo}`);            
        },
        inviaForm2(saluto){
            console.log(`${saluto}, ${this.testo}`);            
        },
        logKeys(e){
            console.log(e);
            
        }
    }
}).mount('#app')