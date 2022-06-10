app.component('formulario', {
    template:
    /*html*/
    `
    <div class="content">
            
            <h1>{{ingresarDatos}}</h1>
            <hr>
            <section>
            <label for="name"> Apellido y nombre: </label><br>
            <input v-model="name"><br>
            <label for="monto"> {{inversion}} </label><br>
            <input v-model="monto" type="number"><br>
            <small>{{inversionMinima}}</small>
            <br>
            <label for="dias
            "> Cantidad de días: </label><br>
            <input v-model="dias" type="number"><br>
            <small>{{diasMinimos}}</small>
            <br><br>
            <button v-on:click="btnCalcular" id="btnCalcular">Calcular</button>
            <br>
          
            </section>
            <div id="error">
                <p v-show="mensajeError === 1">El nombre y el apellido son datos requeridos</p>
                <p v-show="mensajeError === 2">El monto ingresado no es valido</p>
                <p v-show="mensajeError === 3">Los dias ingresados no son validos</p>
            </div>
            <div>
              <p v-if="montofinal" id="mostrarMontoFinal">{{ mostrarMontoFinal }}</p>    
            </div>
    </div>`,
data() {
    return {
      inversionMinima: 'La inversion minima debe ser de $1000',
      diasMinimos: '(Mínimo 30 días)',
      inversion: 'Monto que desea invertir',
      ingresarDatos: 'Por favor, ingrese sus datos',
      name: '',
      monto: null,
      dias: null,
      mensajeError: 0,
      porcentaje: 0,
      montofinal: null,
      mostrarMonto: true,

      
    }
},
methods: {
    btnCalcular(){
      this.validarFormulario();
      this.calcularPorcentaje();
      if(this.mensajeError ===0){this.calcularMonto()};
    },
    validarFormulario(){
      this.bandera = true;
      if(this.name.trim() === ''){
        this.mensajeError = 1;
      }else if(this.monto < 1000){
        this.mensajeError = 2;
      }else if(this.dias < 30){
        this.mensajeError = 3;
      }else{
        this.mensajeError = 0;
      }

    },
    calcularPorcentaje(){
      if (this.dias <= 60){
        this.porcentaje = 40;
      }
      else if(this.dias>60 && this.dias<=120){
        this.porcentaje = 45;
      }
      else if(this.dias>120 && this.dias<361){
        this.porcentaje = 50;
      }
      else if(this.dias > 359){
        this.porcentaje = 65;
      }
      return this.porcentaje;
    },
    calcularMonto(){

      this.montofinal = this.monto+(this.monto*(this.dias/360)*(this.porcentaje/100));
      this.$emit('monto-final', this.montofinal, this.porcentaje);
      return this.montofinal
    }
  },
  computed: {
    mostrarMontoFinal(){
      return 'Su monto final es: ' + this.montofinal
    }
  }   
  
})

