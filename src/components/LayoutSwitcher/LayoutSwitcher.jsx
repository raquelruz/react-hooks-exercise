import { useDevice } from "../../hooks/useDevice";
import "../styles.css";

export const LayoutSwitcher = () => {
	const { isMobile, isTablet, isDesktop } = useDevice();

	let columns = 2;
	if (isTablet) columns = 3;
	else if (isDesktop) columns = 4;

	const cards = Array.from({ length: 12 }, (_, i) => i + 1);

	return (
		<div className="layout-switcher-container">
			<h2>Layout Switcher</h2>
			<div className="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
				{cards.map((card) => (
					<div key={card} className="card">
						Card {card}
					</div>
				))}
			</div>
		</div>
	);
};
