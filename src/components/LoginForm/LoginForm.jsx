import { useState } from "react";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";
import "./LoginForm.css";

export const LoginForm = () => {
	const [formData, setFormData] = useState({
		nombre: "",
		email: "",
		password: "",
		mensaje: "",
	});

	const { type, visible, toggleVisible } = usePasswordVisibility();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Datos del formulario:", formData);
		alert("Formulario enviado!");
		setFormData({ nombre: "", email: "", password: "", mensaje: "" });
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nombre:</label>
					<input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
				</div>

				<div>
					<label>Email:</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} required />
				</div>

				<div>
					<label>Contraseña:</label>
					<div className="password-container">
						<input type={type} name="password" value={formData.password} onChange={handleChange} required />
						<button type="button" onClick={toggleVisible}>
							{visible ? "🙈" : "👁️"}
						</button>
					</div>
				</div>

				<div className="btn-container">
					<button type="submit">Iniciar sesión</button>
				</div>
			</form>
		</div>
	);
};
