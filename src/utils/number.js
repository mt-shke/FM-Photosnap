export const convertEnFormat = (numberToConvert) => {
	return new Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(numberToConvert);
};
