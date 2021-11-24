var apiEspecie='http://localhost/mascota_Ake_Canul/public/apiEspecie';
new Vue({
	el:"#especie",

	data:{
		prueba:'Es prueba',
		especies:[],

		id_especie:'',
		especie:'',

	},
// al crear la pagina
	created:function(){
		this.obtenerEspecies();
	},

	methods:{
		obtenerEspecies:function(){
			this.$http.get(apiEspecie).then(function(json){
				this.especies=json.data;
				console.log(json.data);
			}).catch(function(json){
				console.log(json);
			});
		},

		mostrarModal:function(){
			$('#modalEspecie').modal('show');
		},
		guardarEspecie:function(){
			//se construye el json para enviar al controlador
			var especie={id_especie:this.id_especie,especie:this.especie};

			// se envia los datos en json al controlador
			this.$http.post(apiEspecie,especie).then(function(j){
				this.obtenerEspecies();
				this.id_especie='';
				this.especie='';

			}).catch(function(j){
				console.log(j);
			});

			$('#modalEspecie').modal('hide');
			console.log(especie);

		},

		eliminarEspecie:function(id){
			var confir= confir('Esta seguro de eliminar la especie?');
			if (confir) 
			{
				this.$http.delete(apiEspecie + '/' + id).then(function(json){
					this.obtenerEspecies();
				}).catch(function(json){

				});
			}

		},
	}
});