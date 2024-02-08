/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	let url = options.url;
	let method = options.method;
	let formData = new FormData();
	let data = options.data;

	if (method === 'GET') {
		for (let key in data)
			url += '?' + key + '&' + data[key];
	} else {
		for (let key in data) {
			formData.append(key, data[key]);
		}
	}

	try {
		xhr.open(method, url);
		xhr.send(formData);

	} catch (error) {
		options.callback(error);
	}

	xhr.addEventListener('load', () => {
		options.callback(null, xhr.response);
	});
};