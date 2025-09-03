import { useDevice } from "../../hooks/useDevice"; 
import "../styles.css"; 

export const DeviceInfo = () => {
	const { isMobile, isTablet, isDesktop } = useDevice();

	let sizeText = "";
	if (isMobile) sizeText = "Tamaño Mobile";
	else if (isTablet) sizeText = "Tamaño Tablet";
	else if (isDesktop) sizeText = "Tamaño Desktop";

	return (
		<div className={`device-container ${isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}`}>
			<h2>{sizeText}</h2>
		</div>
	);
};