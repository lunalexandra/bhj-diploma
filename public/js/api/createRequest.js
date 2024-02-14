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
		url += '?';
		for (let key in data){
			if(url.slice(-1) == '?'){
				url += `${key}=${data[key]}`
			} else {
				url +=`&${key}=${data[key]}`
			}
		}
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