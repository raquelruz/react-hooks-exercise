import "./App.css";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Counter } from "./components/Counter/Counter";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { WindowInfo } from "./components/WindowInfo/WindowInfo";
import { PokemonFetch } from "./components/PokemonFetch/PokemonFetch";
import { DeviceInfo } from "./components/DeviceInfo/DeviceInfo";
import { LayoutSwitcher } from "./components/LayoutSwitcher/LayoutSwitcher";

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

			<div>
				<PokemonFetch />
			</div>

			<div>
				<DeviceInfo />
			</div>

			<div>
				<LayoutSwitcher />
			</div>
		</>
	);
};
