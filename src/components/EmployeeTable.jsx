import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeTable({ employees }) {
  const navigate = useNavigate();

  const handleRowClick = (emp, index) => {
    navigate(`/details/${index}`, { state: { emp } });
  };

  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: 20,
        cursor: "pointer",
      }}
    >
      <thead style={{ background: "#f0f0f0" }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>City</th>
        </tr>
      </thead>

      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: "center", padding: 20 }}>
              No employees found
            </td>
          </tr>
        ) : (
          employees.map((emp, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(emp, index)}
              style={{ transition: "0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#e9f5ff")}
              onMouseOut={(e) => (e.currentTarget.style.background = "white")}
            >
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
              <td>{emp.city}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
