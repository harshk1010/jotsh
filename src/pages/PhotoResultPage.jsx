import { useLocation, useNavigate } from "react-router-dom";

export default function PhotoResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.image) {
    return <h3>No photo captured</h3>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#E9ECF1",  
        display: "flex",
        justifyContent: "center",  
        alignItems: "flex-start",   
        paddingTop: 50,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 25,
          borderRadius: 14,
          width: 420,
          textAlign: "center",      
          boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            color: "#222",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          Your Captured Photo
        </h2>

        <img
          src={state.image}
          alt="Captured"
          style={{
            width: "100%",          
            borderRadius: 12,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            marginBottom: 25,
          }}
        />

        <button
          onClick={() => navigate("/list")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#007bff",   
            color: "white",
            fontWeight: 600,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
            transition: "0.25s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0062c9")}
          onMouseOut={(e) => (e.target.style.background = "#007bff")}
        >
          Back to List
        </button>
      </div>
    </div>
  );
}
