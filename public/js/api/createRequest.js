/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	let {url, method, data} = options;
	let formData = new FormData();

	if (method === 'GET') {
		const arr = Object.entries({data}).map(([key, value]) => [key + '=' + value]);
		url = url + '?' + arr.join('&');
	} else {
		for (let key in data) {
			formData.append(key, data[key]);
		}
	}

	try {
		xhr.open(method, url);
		xhr.send(formData);

	} catch (err) {
		options.callback(err);
	}

	xhr.addEventListener('load', () => {
		options.callback(null, xhr.response);
	});
};
