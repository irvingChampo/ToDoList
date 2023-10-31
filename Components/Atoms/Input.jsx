import './Input.css';

const input = ({ type, placeholder, value, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const allowedCharacters = /^[A-Za-z0-9]{15}$/; // Expresión regular para letras mayúsculas, minúsculas y números con un límite de 15 caracteres
    if (!allowedCharacters.test(inputValue)) {
      e.target.classList.add("error"); // Marca el input de rojo si hay caracteres no permitidos o supera los 15 caracteres
    } else {
      e.target.classList.remove("error"); // Quita la marca de rojo si la entrada es válida
    }
    onChange(e);
  };

  return (
    <input
      className="Input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default input;
