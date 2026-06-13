<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pensioner;

class PensionerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
         //parameters: pagination, sorting, filtering
        try {
            $pensioners = Pensioner::all();
            //select * from pensioners;
            $response = [
                'success' => true,
                'data' => $pensioners,
                'message' => 'Pensioners fetched successfully.'
            ];
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while fetching pensioners.',
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
            //validation
            $validatedData = $request->validate([
                'serial_number' => 'required|string|max:10|unique:pensioners',
                'control_number' => 'required|string|max:20|unique:pensioners',
                'last_name' => 'required|string|max:100',
                'first_name' => 'required|string|max:100',
                'middle_name' => 'nullable|string|max:100',
                'pension_account' => 'required|string|max:20',
                'rank' => 'required|string|max:50',
                'bank_name' => 'required|string|max:255',
                'amount_centavos' => 'required|numeric|min:0',
                'retirement_date' => 'required|date'
            ]);

            $pensionerData = [ 
                ...$validatedData,
                'amount_centavos' => (int) $validatedData['amount_centavos'] * 100
            ];

            $pensioner = Pensioner::create($pensionerData);
            //insert into pensioners (serial_number, control_number) values ('SN001', 'CN001');
            $response = [
                'success' => true,
                'data' => $pensioner,
                'message' => 'Pensioner created successfully.'
            ];
            return response()->json($response, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while saving pensioner.',
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
            $pensioner = Pensioner::FindOrFail($id);
            return response()->json($pensioner, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while fetching pensioner.',
                'pensioner_id' => $id,
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
            $pensioner = Pensioner::FindOrFail($id);

            //validation
            $validatedData = $request->validate([
                'serial_number' => 'required|string|max:10',
                'control_number' => 'required|string|max:20',
                'last_name' => 'required|string|max:100',
                'first_name' => 'required|string|max:100',
                'middle_name' => 'nullable|string|max:100',
                'pension_account' => 'required|string|max:20',
                'rank' => 'required|string|max:50',
                'bank_name' => 'required|string|max:255',
                'amount_centavos' => 'required|numeric|min:0',
                'retirement_date' => 'required|date'
            ]);

 $pensionerData = [ 
                ...$validatedData,
                'amount_centavos' => (int) $validatedData['amount_centavos'] * 100
            ];

            $pensioner->update($pensionerData);


            return response()->json($pensioner, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while updating pensioner.',
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
            $pensioner = Pensioner::FindOrFail($id);
            $pensioner->delete();
            return response()->json([
                'message' => 'Pensioner deleted successfully.',
                'pensioner_id' => $id
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while deleting pensioner.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


}