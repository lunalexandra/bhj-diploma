/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
	static URL = '/account';
	/**
	 * Получает информацию о счёте
	 * */
	static get(id = '', callback) {
		this.URL = this.URL + '/' + id;
		createRequest({
			data,
			method: 'GET',
			url: this.URL,
			callback
		})
		callback = (error, response) => {
			if (!response.success) {
				alert(`error: ${error}`);
			}
			return response;
		};
	}
}