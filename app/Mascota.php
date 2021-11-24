<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    // Nombre de la tabla
    protected $table='mascotas';

    //clave primaria de la tabla
    protected $primaryKey='id_mascota';

    //Espesificamos las relaciones
    public $with=['especie'];

    //La clave primaria es numerica
    public $incrementing=true;

    // activar o desactivar etiquetas de tiempo
   public $timestamps=true;

   //Lista de campos para recibir valor
   protected $fillable=[
   	'nombre',
    'edad',
   	'genero',
   	'peso',
   	'id_especie',
   	'id_propietario'
   ];

   public function especie()
   {
    return $this->belongsTo(Especie::class,'id_especie','id_especie');
   }
}
