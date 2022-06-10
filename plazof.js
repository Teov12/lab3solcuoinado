const app = Vue.createApp({
  data(){
    return{
      montoInicial: 0,
      porcentaje: 0,
      reinvertir: false
    }
  },
  methods: {
    pasarMontoFinal(montoPasado, porcentajePasado){
      this.montoInicial = montoPasado;
      this.porcentaje = porcentajePasado;
      this.reinvertir = true;
      console.log(this.montoInicial);
      console.log(this.porcentaje);
    }
  },
  computed: {
    
  }

})
