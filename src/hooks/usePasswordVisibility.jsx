import { useToggle } from "./useToggle"; 

export const usePasswordVisibility = () => {
	const [visible, toggleVisible] = useToggle(false);

	return {
		type: visible ? "text" : "password",
		visible,
		toggleVisible,
	};
};
