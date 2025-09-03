import "./App.css";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Counter } from "./components/Counter/Counter";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { WindowInfo } from "./components/WindowInfo/WindowInfo";

export const App = () => {
	const width = useWindowWidth();

	return (
		<>
			<h1>Hooks & Custom Hooks</h1>
			<div className="login-form">
				<LoginForm />
			</div>

			<div className="counter">
				<Counter />
			</div>

			<div>
				<WindowInfo />
			</div>
		</>
	);
};
