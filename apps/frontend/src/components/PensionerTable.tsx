import type { Pensioner } from "../types/pensioner";
import { useNavigate } from "react-router-dom";
import toPesos from "../util/currency";

function PensionerTable({ pensioners }: { pensioners: Pensioner[] }) {
  const navigate = useNavigate();

  const handleAddPensioner = () => {
    navigate("/pensioner/create");
  };

  return (
    <>
      <h2>List of Pensioners</h2>
      <button onClick={handleAddPensioner}>Add New Pensioner</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Serial Number</th>
            <th>Control Number</th>
            <th>Name</th>
            <th>Monthly Pension</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pensioners.map((pensioner) => (
            <tr key={pensioner.id}>
              <td>{pensioner.id}</td>
              <td>{pensioner.serial_number}</td>
              <td>{pensioner.control_number}</td>
              <td>{pensioner.first_name} {pensioner.middle_name} {pensioner.last_name}</td>
              <td>{toPesos(pensioner.amount_centavos)}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PensionerTable;
