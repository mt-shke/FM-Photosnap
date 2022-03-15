import { useEffect, useState } from "react";

const useViewport = () => {
	const [viewport, setViewport] = useState(null);
	// const actualViewport = window.innerWidth <= 768 ? true : false;
	console.log(viewport);
	const handleResize = () => {
		setViewport(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return viewport < 768 ? true : false;
};

export default useViewport;
