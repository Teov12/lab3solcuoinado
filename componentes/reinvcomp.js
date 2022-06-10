app.component('reinvertir',{
    props:{
        montoInicial:{
        type: Number,
        }
    },
    template:
    /*html*/
    `<br>
    <button v-on:click="btnReinvertir">Reinvertir</button>
    <br>
    <div v-show="mostrarGrilla" id="mostrarReinvertir">
        <div id="grid-1"></div>
        <div id="grid-2"></div>
        <div id="grid-3"></div>
        <div id="grid-4"></div>
        <div id="grid-5"></div>
        <div id="grid-6"></div>
        <div id="grid-7"></div>
        <div id="grid-8"></div>
        <div id="grid-9"></div>
        <div id="grid-10"></div>
        <div id="grid-11"></div>
        <div id="grid-12"></div>
        <div id="grid-13"></div>
        <div id="grid-14"></div>
        <div id="grid-15"></div>
    </div>`,
data() {
    return {
        mostrarGrilla: false
    }
},
methods: {
    btnReinvertir(){
        this.mostrarGrilla = true;
        console.log(this.montoInicial);
    }
    
},
computed: {

}
})