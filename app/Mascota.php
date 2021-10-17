<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    protected $table='mascotas'
    protected $primaryKey='id_mascota'

    //define si la llave primaria es o no un numero autoincrementable
    public $incrementing=true;

    // activar o desactivar etiquetas de tiempo

   public $timestamps=true;

   public $fillable=[
   	'id_mascota',
   	'nombre',
   	'genero',
   	'peso',
   	'id_propietario',
   	'id_especie',
   	'id_raza'
   ];
}
