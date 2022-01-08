export const timer = async function (time, errorMessage) {
	return new Promise(function (_, reject) {
		setTimeout(() => {
			reject(new Error(errorMessage));
		}, time * 1000);
	});
};

export const getSlug = () => {
	return window.location.href.replace(window.location.origin, "").replace(window.location.pathname, "");
};


export const tlc = (data) => {
	return data.toString().toLowerCase();
};

export const replaceAccent = (string) => {
	return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};


