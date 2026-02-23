import { useEffect, useState } from "react";
import { fetchEmployees } from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const cityCoords = {
  Bengaluru: [12.9716, 77.5946],
  Mumbai: [19.076, 72.8777],
  Delhi: [28.7041, 77.1025],
  Chennai: [13.0827, 80.2707],
  Hyderabad: [17.385, 78.4867],
};

export default function MapPage() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchEmployees().then((res) => {
      const list = res.map((e) => ({
        name: e.name,
        city: e.city,
        coords: cityCoords[e.city] || [20.5937, 78.9629],
      }));

      setCities(list);
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#F4F6F8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      <h2 style={{ color: "#222", marginBottom: 20 }}>Employee Cities Map</h2>

      {/* MAP CONTAINER */}
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          height: "520px",
          background: "white",
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          style={{ height: "100%", width: "100%" }} 
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {cities.map((c, index) => (
            <Marker key={index} position={c.coords}>
              <Popup>
                <b>{c.name}</b> <br /> {c.city}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
