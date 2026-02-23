import { useEffect, useState } from "react";
import { fetchEmployees } from "../api";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",         
        background: "#F4F6F8",
        paddingTop: 40,
      }}
    >
      <h2 style={{ color: "#222", marginBottom: 20 }}>Employee List</h2>

      {/* Buttons */}
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => navigate("/bar-graph")}
          style={{
            padding: "10px 18px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            marginRight: 10,
            fontSize: 15,
          }}
        >
          Show Bar Graph
        </button>

        <button
          onClick={() => navigate("/map")}
          style={{
            padding: "10px 18px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Show Map
        </button>
      </div>

      {/* Table Container to center table */}
      <div
        style={{
          width: "90%",                 
          maxWidth: "900px",            
          display: "flex",
          justifyContent: "center",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ background: "#343a40", color: "white" }}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Salary</th>
              <th style={thStyle}>City</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={index}
                onClick={() =>
                  navigate(`/details/${index}`, { state: { emp } })
                }
                style={{
                  cursor: "pointer",
                  background: index % 2 === 0 ? "#fafafa" : "#ffffff",
                  transition: "0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#e9f5ff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background =
                    index % 2 === 0 ? "#fafafa" : "#ffffff")
                }
              >
                <td style={tdStyle}>{emp.id}</td>
                <td style={tdStyle}>{emp.name}</td>
                <td style={tdStyle}>{emp.salary}</td>
                <td style={tdStyle}>{emp.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px 15px",
  textAlign: "left",
  fontSize: "15px",
  fontWeight: 600,
};

const tdStyle = {
  padding: "12px 15px",
  color: "#333",
  fontSize: "14px",
};
