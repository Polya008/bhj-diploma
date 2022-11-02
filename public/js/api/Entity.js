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
  static list(data, callback = (f) => f){
      createRequest({
        data,
        method: 'GET', 
        url: this.URL,
        callback : (err, response) => callback(err, response)
      });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    //const modifiedData = Object.assign({ method: "PUT" }, data);
      createRequest({
        data: data, 
        method: 'PUT',
        url: this.URL, 
       // callback: (err, response) => callback(err, response),
        callback: callback,
      });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    //const modifiedData = Object.assign({ [id]: data }, { method: "DELETE" });
      createRequest({
        data: data,
        method: 'DELETE', 
        url: this.URL, 
        callback: callback
        });
  }
}
