import axios from "axios";

export const fetchEmployees = async () => {
  const payload = {
    username: "test",
    password: "123456",
  };

  const res = await axios.post(
    "https://backend.jotish.in/backend_dev/gettabledata.php",
    payload
  );

  const rows = res.data?.TABLE_DATA?.data || [];

  return rows.map((row) => ({
            
    name: row[0], 
    position: row[1],     
    city: row[2],
    id: row[3],
    startDate: row[4],
    salary: row[5],    
  }));
};
