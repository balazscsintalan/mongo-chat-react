const options = {
	year: 'numeric', month: 'numeric', day: 'numeric',
	hour: 'numeric', minute: 'numeric', second: 'numeric',
	hour12: false,
};

export const formatDate = (timestamp) => {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat('hu-HU', options).format(date);
};