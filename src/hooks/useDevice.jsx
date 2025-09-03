import { useState, useEffect } from "react";
import { useWindowWidth} from "./useWindowWidth";

export const useDevice = () => {
	const width = useWindowWidth(); 
	const [device, setDevice] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	});

	useEffect(() => {
		if (width < 768) {
			setDevice({ isMobile: true, isTablet: false, isDesktop: false });
		} else if (width >= 768 && width < 1024) {
			setDevice({ isMobile: false, isTablet: true, isDesktop: false });
		} else {
			setDevice({ isMobile: false, isTablet: false, isDesktop: true });
		}
	}, [width]);

	return device;
};
