import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function QrScanner() {
  const [qrData, setQrData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <>
      <h1 className="text-white">QrScanner</h1>

      <div style={{ border: "2px solid white", padding: "10px", borderRadius: "10px" }}>
        {/* Configura el componente de escáner dentro de un contenedor con borde blanco */}
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </div>

      {/* Muestra el resultado del escaneo */}
      {qrData && <p>QR Code Data: {qrData}</p>}
    </>
  );
}

export default QrScanner;