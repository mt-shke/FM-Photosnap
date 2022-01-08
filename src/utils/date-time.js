export const newDateFormat = () => {
	return new Date().toISOString().slice(0, 10);
};

export const frDateFormat = (newDate) => {
	return `${newDate.getDate()}/${
		+newDate.getMonth() + 1
	}/${newDate.getFullYear()} à ${newDate.getHours()}h${newDate.getMinutes()}`;
};

export const frDay = (newDate) => {
	return frDateFormat(newDate).slice(0, 10);
};

export const dateGetTime = (string) => {
	return new Date(string).getTime();
};

export const getTimeInMin = () => {
	return Math.floor(new Date().getTime() / 1000 / 60);
};
