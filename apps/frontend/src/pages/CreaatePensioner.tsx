import { useEffect } from "react";
import PensionerForm from "../components/PensionerForm";
import { fetchAllPensioners } from "../services/pensionerService";

function CreatePensioner() {
  const fetchData = async () => {
    await fetchAllPensioners();
  };

  useEffect(() => {
    fetchData();
  }, []); //fetch data on component mount
  return <PensionerForm loadPensioners={fetchData} />;
}

export default CreatePensioner;
