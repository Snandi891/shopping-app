import { useEffect, useState } from "react";

export default function LocationAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/sunglass")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        📍 User Device & Location Info
      </h1>

      {data.length === 0 ? (
        <p>No location data found.</p>
      ) : (
        data.map((item, idx) => {
          const lat = item?.location?.latitude;
          const lon = item?.location?.longitude;
          const place = item?.location?.place || "Unknown";

          return (
            <div
              key={idx}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ margin: 0 }}>
                📱 Device:{" "}
                <span style={{ color: "#333" }}>{item.deviceName}</span>
              </h3>
              <p>
                <strong>Model:</strong> {item.modelNumber}
              </p>
              <p>
                <strong>Location:</strong> {place}
              </p>
              <p>
                <strong>Latitude:</strong> {lat}
              </p>
              <p>
                <strong>Longitude:</strong> {lon}
              </p>

              {lat && lon && (
                <a
                  href={`https://www.google.com/maps?q=${lat},${lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "8px 14px",
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  📍 View on Google Maps
                </a>
              )}

              {item.contacts && item.contacts.length > 0 && (
                <div style={{ marginTop: "15px" }}>
                  <strong>📇 Contacts:</strong>
                  <ul>
                    {item.contacts.map((c, index) => (
                      <li key={index}>
                        {c.name || "Unknown"} -{" "}
                        {c.phoneNumbers?.[0]?.number || "No number"}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
