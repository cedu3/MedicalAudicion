function CitaForm() {
  return (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="telefono">Teléfono:</label>
      <input type="tel" id="telefono" name="telefono" required />
      <label htmlFor="dni">DNI:</label>
      <input type="text" id="dni" name="dni" required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CitaForm;
