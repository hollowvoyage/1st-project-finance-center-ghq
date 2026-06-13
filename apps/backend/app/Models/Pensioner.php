<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pensioner extends Model
{
    protected $table = 'pensioners';   //optional

    protected $fillable = [
        'serial_number',
        'control_number',
        'last_name',
        'first_name',
        'middle_name',
        'pension_account',
        'rank',
        'bank_name',
        'amount_centavos',
        'retirement_date'
    ];
}
