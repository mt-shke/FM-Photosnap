export const getLocalData = () => {
	return JSON.parse(localStorage.getItem("next-tailwind")) ?? [];
};

export const resetLocalData = () => {
	localStorage.setItem("next-tailwind", "");
};

export const setLocalData = (data) => {
	localStorage.setItem("next-tailwind", JSON.stringify(data));
};
