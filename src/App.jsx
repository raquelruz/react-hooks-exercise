import "./App.css";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Counter } from "./components/Counter/Counter";

export const App = () => {
	return (
		<>
			<h1>Hooks & Custom Hooks</h1>
			<div className="login-form">
				<LoginForm />
			</div>

			<div className="counter">
				<Counter />
			</div>
		</>
	);
};
