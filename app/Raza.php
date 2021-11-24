<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
    protected $table='razas';
    protected $primaryKey='id_raza';

    //define si la llave primaria es o no un numero autoincrementable
    public $incrementing=true;

    // activar o desactivar etiquetas de tiempo

   public $timestamps=true;

   public $fillable=[
   	'id_raza',
    'raza'
   ];
}