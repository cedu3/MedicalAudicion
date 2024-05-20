function LoginMedico() {
  return (
    <div className="container">
      <h2>Ingreso de Médicos</h2>
      <form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginMedico;
