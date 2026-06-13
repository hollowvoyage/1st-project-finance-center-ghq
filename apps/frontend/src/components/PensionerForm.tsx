import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { PensionerFormData } from "../types/pensioner";
import { createPensioner } from "../services/pensionerService";

function PensionerForm({ loadPensioners }: { loadPensioners: () => void }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const cleanedData: PensionerFormData = {
      serial_number: event.currentTarget.serial_number.value.toString().trim(),
      control_number: event.currentTarget.control_number.value.toString().trim(),
      last_name: event.currentTarget.last_name.value.toString().trim(),
      first_name: event.currentTarget.first_name.value.toString().trim(),
      middle_name: event.currentTarget.middle_name.value.toString().trim(),
      pension_account: event.currentTarget.pension_account.value.toString().trim(),
      rank: event.currentTarget.rank.value.toString().trim(),
      bank_name: event.currentTarget.bank_name.value.toString().trim(),
      amount_centavos: Number(event.currentTarget.amount_centavos.value),
      retirement_date: event.currentTarget.retirement_date.value.toString(),
    };

    try {
      await createPensioner(cleanedData);
      loadPensioners(); // Call the function to fetch updated pensioner list
    } catch (error) {
      console.error("Error creating pensioner:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the pensioner list page
  };

  return (
    <>
      <h2>Add New Pensioner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="serial_number">Serial Number:</label>
          <input id="serial_number" name="serial_number" required type="text" maxLength={10} />
        </div>

        <div>
          <label htmlFor="control_number">Control Number:</label>
          <input id="control_number" name="control_number" required type="text" maxLength={20} />
        </div>

 <div>
          <label htmlFor="first_name">First Name:</label>
          <input id="first_name" name="first_name" required type="text" />
        </div>

 <div>
          <label htmlFor="last_name">Last Name:</label>
          <input id="last_name" name="last_name" required type="text" />
        </div>

 <div>
          <label htmlFor="middle_name">Middle Name:</label>
          <input id="middle_name" name="middle_name" type="text" />
        </div>

<div>
          <label htmlFor="pension_account">Pension Account:</label>
          <input id="pension_account" name="pension_account" required type="text" maxLength={20} />
        </div>

<div>
          <label htmlFor="rank">Rank:</label>
          <input id="rank" name="rank" required type="text" maxLength={50} />
        </div>

<div>
          <label htmlFor="bank_name">Bank Name:</label>
          <input id="bank_name" name="bank_name" required type="text" />
        </div>

<div>
          <label htmlFor="amount_centavos">Amount:</label>
          <input id="amount_centavos" name="amount_centavos" required type="number" />
        </div>


        <div>
          <label htmlFor="retirement_date">Retirement Date:</label>
          <input id="retirement_date" name="retirement_date" type="date" />
        </div>

        
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default PensionerForm;
