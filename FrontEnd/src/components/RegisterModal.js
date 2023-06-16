import React from "react";

function RegisterModal({ closeModal }) {
  const handleRegister = () => {
    // Aquí puedes agregar la lógica de registro
    // ...
    // Una vez que se completa el registro, puedes cerrar el modal llamando a la función closeModal
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Formulario de registro</h2>
        {/* Aquí puedes agregar los campos y elementos del formulario de registro */}
        <button onClick={handleRegister}>Registrarse</button>
        <button onClick={closeModal}>Cancelar</button>
      </div>
    </div>
  );
}

export default RegisterModal;