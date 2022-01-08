export const validateLength = (input) => {
	// regex => should only x format etc
	return input.trim() !== "";
};

export const validateNumber = (input) => {
	const text = /^[0-9]*$/;
	return text.test(Number(input)) && input.trim() !== "";
};

export const validateEmail = (email) => {
	const text = /[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,5}$/;
	return text.test(String(email).toLowerCase());
};

export const validateSpecialChar = (input) => {
	const isValid = /^[a-zA-Z0-9äöüÄÖÜ]*$/;
	return isValid.test(input);
};

export const validateSpecialCharNoNumber = (input) => {
	const isValid = /^[a-zA-ZäöüÄÖÜ]*$/;
	return isValid.test(input);
};

export const stringToPascalCase = (input) => {
	return input.slice(0, 1).toUpperCase() + input.slice(1, input.length).toLowerCase();
};
