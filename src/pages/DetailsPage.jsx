import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useRef, useState } from "react";

export default function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const emp = state?.emp;

  const webcamRef = useRef(null);
  const [showCam, setShowCam] = useState(false);

  if (!emp) return <h3>No employee selected</h3>;

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/photo-result", { state: { image: imageSrc } });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#E9ECF1", 
        paddingTop: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 25,
          borderRadius: 14,
          width: 420,
          boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            marginBottom: 20,
            textAlign: "center",
            color: "#222",        
            fontWeight: 600,
          }}
        >
          Employee Details
        </h2>

        <div style={{ color: "#333", fontSize: 16, lineHeight: 1.6 }}>
          <p><b>ID:</b> {emp.id}</p>
          <p><b>Name:</b> {emp.name}</p>
          <p><b>Position:</b> {emp.position}</p>
          <p><b>Office:</b> {emp.city}</p>
          <p><b>Start Date:</b> {emp.startDate}</p>
          <p><b>Salary:</b> {emp.salary}</p>
      </div>

        {/* Show Camera Button */}
        {!showCam && (
          <button
            onClick={() => setShowCam(true)}
            style={{
              marginTop: 25,
              padding: "12px 18px",
              background: "#007bff",      
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              width: "100%",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Open Camera
          </button>
        )}

        {/* Camera View */}
        {showCam && (
          <div style={{ marginTop: 20 }}>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={{
                width: "100%",
                borderRadius: 10,
                marginBottom: 12,
                border: "1px solid #ccc",
              }}
            />

            <button
              onClick={capture}
              style={{
                padding: "12px 18px",
                background: "#28a745",   
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                width: "100%",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Capture Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
