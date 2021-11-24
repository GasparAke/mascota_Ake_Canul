@extends('layouts.master')
@section('titulo','Crud Especies')
@section('contenido')
    <!--INICIO DE VUE-->
    <div id="apiEspecies">  
        <div class="row">
            <div class="cold-md-12">
                <div class="card card-warning">
                    <div class="card-header">
                        <h1>Crud Especies
                            <span class="btn btn-sm">
                                <i class="fas fa-plus" @click="mostrarModal()"></i>
                            </span>
                        </h1>
                    </div>
                    <div class="card">
                        <table class="table table-bordered table-striped">
                    <thead>
                        <th hidden="">id_especie</th>
                        <th>especie</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="especie in especies">
                            <td hidden="">@{{especie.id_especie}}</td>
                            <td>@{{especie.especie}}</td>
                            <td>
                                <button class="btn btn-sm">
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button class="btn btn-sm" @click="eliminarEspecie(especie.id_especie)">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                <!--fin de la tabla-->
                    </div>
                </div>
            </div>
            <!--fin de cold-->
        </div>
        
        <!-- INICIA MODAL -->
<div class="modal fade" id="modalEspecie" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro de Especies</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
                    <!--<input type="text" class="form-control" placeholder="Clave id" v-model="id_especie"><br>-->
                

                    <input type="text" class="form-control" placeholder="Escriba especie" v-model="especie"><br>
          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="guardarEspecie">Guardar</button>
      </div>
    </div>
  </div>
</div>
<!-- termina el modal-->



    </div>
    <!--FIN DE VUE-->
@endsection

@push('scripts')
<script src="{{asset('js/apis/especies.js')}}"></script>
<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
<script type="text/javascript" src="{{asset('js/apis/apiespecie.js')}}"></script>
@endpush

