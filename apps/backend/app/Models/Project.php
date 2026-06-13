<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    protected $table = 'projects';   //optional

    protected $fillable = [
        'code',
        'name',
        'date_started',
        'date_completion'
    ];

    public function employees(): BelongsToMany
    {
        return $this->belongsToMany(Employee::class, 'employee_projects', 'project_id', 'employee_id');
    }
}
