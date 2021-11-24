
function init(){

var apiMascota = 'http://localhost/mascota_Ake_Canul/public/apiMascota';
var apiEspecie = 'http://localhost/mascota_Ake_Canul/public/apiEspecie';

new Vue({
    //Asignamos el token
    http: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
        }
    },
    el:'#mascota',

    data:{
        mensaje:'HOLA MUNDO CRUEL',
        mascotas:[],

    },

    //se ejecuta automaticamente cuando la pagina se crea
    created:function(){
        this.getMascotas();
    },

    //INICIO DE METHODS
    methods:{
        //obtiene el listado de todas las especies
        getMascotas:function(){
            this.$http.get(apiMascota).then(function(json){
                this.mascotas=json.data;
            })
        },
        eliminarMascota:function(id){

            Swal.fire({
                title: '¿Estás seguro de eliminar?',
                text: "No podras deshacer los cambios!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    //eliminamos la especie realmente
                    this.$http.delete(apiMascota + '/' + id).then(function(json){
                        this.getMascotas();
                    }).catch(function(json){
                        console.log(json);
                    });

                    // fin de la eliminacion
                  Swal.fire(
                    'Eliminado!',
                    'Tu mascota fue eliminada.',
                    'success'
                  )
                }
              });

        },
        //fin del metodo eliminar

        mostrarModal(){
            $('#modalMascotas').modal('show');
        }
    },
    //FIN DE METHODS
    computed:{

    },
})
}window.onload = init;