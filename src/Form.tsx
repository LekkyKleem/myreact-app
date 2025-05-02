import React, { useState } from "react";
import "./styles.css";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (name.length < 2) {
      newErrors.name = "Имя должно быть не короче 2 символов";
      valid = false;
    }
    if (!email.includes("@")) {
      newErrors.email = "Email должен содержать символ @";
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = "Пароль должен быть не короче 6 символов";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Форма успешно отправлена!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="error">{errors.name}</span>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span className="error">{errors.email}</span>

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span className="error">{errors.password}</span>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
