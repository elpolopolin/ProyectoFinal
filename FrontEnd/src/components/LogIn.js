import React from "react";

function LogIn({ username, password, setUsername, setPassword, onLogin, incorrecto }) {
  const handleLogin = () => {
    // Aquí puedes agregar tu lógica de autenticación real usando 'username' y 'password'
    // Por simplicidad, este ejemplo solo llama a la función 'onLogin' cuando se hace clic en el botón
    onLogin();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <input
       type="text"
       value={username}
       onChange={handleUsernameChange}
       placeholder="Nombre de usuario"
        
      />
    
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Contraseña"
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
     <p className="text-danger">{incorrecto}</p>
    </div>
  );
}

export default LogIn;