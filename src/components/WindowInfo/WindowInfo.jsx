import { useToggle } from "../../hooks/useToggle";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import "../styles.css";

export const WindowInfo = () => {
	const width = useWindowWidth();

	return (
		<div className={`window-container ${width < 768 ? "mobile" : "desktop"}`}>
			<h3>Ancho de ventana: {width}px</h3>
			<p>{width < 768 ? "Modo Mobile" : "Modo Desktop"}</p>
		</div>
	);
};
