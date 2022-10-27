/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

  static URL = '';

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list({data}, callback = (f) => f){
      return createRequest({
        data,
        method: 'GET', 
        url: this.URL,
        responseType: 'json',
        callback : (err, response) => callback(err, response)
      });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback= (f) => f) {
    const modifiedData = Object.assign({ _method: "PUT" }, data);
      return createRequest({
        data: modifiedData, 
        method: 'POST',
        url: this.URL, 
        responseType: 'json',
        callback: (err, response) => callback(err, response),
      });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove({data}, callback ) {
    const modifiedData = Object.assign({ [id]: data }, { _method: "DELETE" });
      return createRequest({
        data: modifiedData,
        method: 'POST', 
        url: this.URL, 
        responseType: 'json',
        callback});
  }
}
