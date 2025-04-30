import React, {useState} from "react";

//Состояние полей ввода
const Form: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

//Состояние ошибок
const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

//Функция валидации

const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (name.length < 2) {
      newErrors.name = "Имя должно быть не короче 2 символов";
      valid = false;
    }
    if(!email.includes("@")) {
        newErrors.email = "Email должен содержать символ @";
        valid = false;
    }
    if(password.length < 6){
        newErrors.password = "Пароль должен быть не короче 6 символов";
        valid = false;
    }

    setErrors(newErrors);
    return valid;
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()){
        alert("Форма успешно отправлена!");
    }
};


return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" , width: "500px", margin: "0 auto", fontFamily: "Roboto Condensed, sans-serif"}}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ fontFamily: "Roboto Condensed, sans-serif"}}
      />
      <span style={{ color: "red" , fontFamily: "Roboto Condensed, sans-serif"}}>{errors.name}</span>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ fontFamily: "Roboto Condensed, sans-serif"}}
      />
      <span style={{ color: "red" , fontFamily: "Roboto Condensed, sans-serif"}}>{errors.email}</span>

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ fontFamily: "Roboto Condensed, sans-serif"}}
      />
      <span style={{ color: "red" , fontFamily: "Roboto Condensed, sans-serif"}}>{errors.password}</span>

      <button type="submit" style={{fontFamily: "Roboto Condensed, sans-serif", fontSize: 20, fontWeight: 800}}>Отправить</button>
    </form>
  );
};

export default Form;