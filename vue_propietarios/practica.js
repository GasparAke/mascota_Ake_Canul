new Vue({
   //Especificar la zona de actuacion de Vue
  el:"#miPagina",

  // Esta seccion de VUE sirve para declarar Variables
  // Y constantes.
  data:{
  	mensaje:'HOLI',
  	alumno:'',
   nombre:'',
   apellidop:'',
   apellidom:'',
   genero:'',
   editando:'', 
   indice:'',
   buscar:'',
   propietarios:[{nombre:'Luis',apellidop:'Perez',apellidom:'Ojeda',genero:'Masculino'},
             {nombre:'Pedro',apellidop:'Canche',apellidom:'Lopez',genero:'Masculino'},
             {nombre:'Maria',apellidop:'Mata',apellidom:'Lozano',genero:'Femenino'},
             {nombre:'Karla',apellidop:'Zapata',apellidom:'Obrador',genero:'Femenino'}
            ],

   generos:[
               {clave:1,genero:'Masculino'},
               {clave:2,genero:'Femenino'}
            ],



  },

  // Este objeto permite crear funciones y/o procedimeintos 
  methods:{


   agregarPropietario:function(){

      if(this.nombre && this.apellidop && this.apellidom && this.genero){
      // Construimos un objeto de tipo propietario para insertar en el array
      var unPropietario={nombre:this.nombre,apellidop:this.apellidop,apellidom:this.apellidom,genero:this.genero}

      // Agrego un propietario
      this.propietarios.push(unPropietario);
      this.limpiarHtml();

      //enviamos el foco al primer componente al html/nombre el propietario, se debe agregar a todas las interfaces
      this.$refs.nombre.focus();

      //aca agregamos el mensaje de exito
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Se ha guardado exitosamente',
         showConfirmButton: false,
         timer: 2000
       })
   }
   else{
      Swal.fire({
         position: 'top end',
         icon:'error',
         title: 'Debe capturar todo los datos',
         showConfirmButton: false,
         timer: 2000
      });
   }},

   limpiarHtml:function(){
     this.nombre='';
     this.apellidop='';
     this.apellidom='';
     this.genero=''; 
   },

   eliminarPropietario:function(pos){
      var pregunta=confirm('¿Esta seguro que desea eliminar?');
      if(pregunta)
        //console.Log('voy a eliminar: ' + pos);
      this.propietarios.splice(pos,1);
      //else
        //console.Log('se arrepintio: ' + pos);
   },


   editarPropietario:function(pos){
      this.nombre=this.propietarios[pos].nombre;
      this.apellidop=this.propietarios[pos].apellidop;
      this.apellidom=this.propietarios[pos].apellidom;
      this.genero=this.propietarios[pos].genero;
      this.editando=1;
      this.indice=pos;
   },
   
   cancelar:function(){
      this.limpiarHtml();
      this.editando=0;
   },
   //modifico los valores del array de objetos
   guardarEdicion:function(){
      this.propietarios[this.indice].nombre=this.nombre;
      this.propietarios[this.indice].apellidop=this.apellidop;
      this.propietarios[this.indice].apellidom=this.apellidom;
      this.propietarios[this.indice].genero=this.genero;
   //limpiamos los componentes html e indicamos que terminamos de editar, activando el boton agregar/azul
      this.limpiarHtml();
      this.editando=0;
   },

   editarPropietario:function(pos){
      this.nombre=this.propietarios[pos].nombre;
      this.apellidop=this.propietarios[pos].apellidop;
      this.apellidom=this.propietarios[pos].apellidom;
      this.genero=this.propietarios[pos].genero;
      this.editando=1;
      this.indice=pos;

   }
   
  },
  // FIN DE METHODS

  //Seccion para calcular valor automaticamente
  computed:{
   numeroPropietarios:function(){
      var num=0;
      num=this.propietarios.length;
      return num;
   },
   filtroPropietario:function(){
      return this.propietarios.filter((propietario)=>{
         return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
               propietario.genero.toLowerCase().match(this.buscar.toLowerCase().trim())
      });
   }         
  }


});