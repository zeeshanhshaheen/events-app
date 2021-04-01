const formatDate = date => {
	return new Date(date).toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

export default formatDate;
