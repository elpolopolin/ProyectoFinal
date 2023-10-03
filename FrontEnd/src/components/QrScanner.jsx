import React, { useState } from "react";


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
       
      </div>

      {/* Muestra el resultado del escaneo */}
      {qrData && <p>QR Code Data: {qrData}</p>}
    </>
  );
}

export default QrScanner;