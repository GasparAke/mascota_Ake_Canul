<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Especie extends Model
{
    protected $table='especies'
    protected $primaryKey='id_especie'

    //define si la llave primaria es o no un numero autoincrementable
    public $incrementing=true;

    // activar o desactivar etiquetas de tiempo

   public $timestamps=true;

   public $fillable=[
   	'id_especie',
    'especie'
   ];
}