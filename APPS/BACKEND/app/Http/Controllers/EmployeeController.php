<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //parameter: pagination, sorting, filtering
        try {
            $employees = Employee::all();
            return response()->json($employees, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'an error occured while fetching employees.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validateData = $request->validate([
                'last_name' => 'required|string|max:100',
                'first_name' => 'required|string|max:100',
                'email' => 'required|email|unique:employees',
                'gender' => 'nullable|string|max:10',
                'birthdate' => 'nullable|date',
                'date_hired' => 'required|date',
                'salary' => 'nullable|numeric'
            ]);

            $employee = Employee::create($validateData);
            return response()->json($employee, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'an error occured while saving employee.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $employee = Employee::findorfail($id);
            return response()->json($employee, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'an error occured while showing employees.',
                'employee_id' => $id,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $employee = Employee::findorfail($id);
            $validateData = $request->validate([
                'last_name' => 'required|string|max:100',
                'first_name' => 'required|string|max:100',

                'gender' => 'nullable|string|max:10',
                'birthdate' => 'nullable|date',
                'date_hired' => 'required|date',
                'salary' => 'nullable|numeric'
            ]);

            $employee->update($validateData);

            return response()->json($employee, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'an error occured while updating employees.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $employee = Employee::findorfail($id);
            $employee->delete();
            return response()->json([
                'message' => 'Employee deleted successfully.',
                'employee_id' => $id
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'an error occured while deleting employees.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
