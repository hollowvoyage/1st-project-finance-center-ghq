<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Employee extends Model
{
    protected $table = 'employees';   //optional

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'gender',
        'birthday',
        'date_hired',
        'salary'
    ];

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'employee_projects', 'employee_id', 'project_id');
    }
}
